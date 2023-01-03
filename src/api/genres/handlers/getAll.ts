import { IGenreHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getAllGenres: IGenreHandlers["getAll"] = async (req, res) => {
  try {
    const genres = await prisma.genre.findMany();
    res.status(200).json(genres);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getAllGenres;
