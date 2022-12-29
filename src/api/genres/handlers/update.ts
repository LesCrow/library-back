import prisma from "../../../../prisma/client";
import { IGenreHandlers } from "../interface";

const updatedGenre: IGenreHandlers["update"] = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;

    const updatedGenre = await prisma.genre.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
    res.status(200).json(updatedGenre);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default updatedGenre;
