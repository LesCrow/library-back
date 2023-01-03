import { BookHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const updateBook: BookHandlers["update"] = async (req, res) => {
  const { title, authorId, genreId, alreadyRead } = req.body;
  try {
    const { id } = req.params;

    const updatedBook = await prisma.book.update({
      where: {
        id,
      },
      data: {
        title,
        authorId,
        genreId,
        alreadyRead,
      },
    });
    res.status(200).json(updatedBook);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default updateBook;
