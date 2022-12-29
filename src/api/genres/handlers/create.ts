import { IGenreHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const createGenre: IGenreHandlers["create"] = async (req, res) => {
  try {
    const { name } = req.body;
    const newCollection = await prisma.genre.create({
      data: {
        name,
      },
    });
    res.status(200).json(newCollection);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createGenre;
