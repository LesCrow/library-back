import { IGenreHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getOneGenre: IGenreHandlers["getOne"] = async (req, res) => {
  const { id } = req.params;
  try {
    const collection = await prisma.genre.findUniqueOrThrow({
      where: {
        id,
      },
    });
    res.status(200).json(collection);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getOneGenre;
