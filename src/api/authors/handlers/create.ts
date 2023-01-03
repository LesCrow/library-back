import { AuthorHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const createAuthor: AuthorHandlers["create"] = async (req, res) => {
  try {
    const { name } = req.body;
    const newAuthor = await prisma.author.create({
      data: {
        name,
      },
    });
    res.status(200).json(newAuthor);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createAuthor;
