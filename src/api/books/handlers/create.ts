import { BookHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const createBook: BookHandlers["create"] = async (req, res) => {
  const { title, authorId, genreId } = req.body;
  try {
    const newBook = await prisma.book.create({
      data: {
        title,
        authorId,
        genreId,
      },
    });
    res.status(200).json(newBook);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createBook;
