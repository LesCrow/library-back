import { BookHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getAllBooks: BookHandlers["getAll"] = async (req, res) => {
  const { author, collection } = req.query;
  try {
    const books = await prisma.book.findMany({
      include: {
        author: author === "true" ? true : false,
        collection: collection === "true" ? true : false,
      },
    });
    res.status(200).json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getAllBooks;
