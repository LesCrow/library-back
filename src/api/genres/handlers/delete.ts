import prisma from "../../../../prisma/client";
import { IGenreHandlers } from "../interface";

const deleteOneGenre: IGenreHandlers["delete"] = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCollection = await prisma.genre.delete({
      where: {
        id,
      },
    });
    res.status(200).json(deletedCollection);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default deleteOneGenre;
