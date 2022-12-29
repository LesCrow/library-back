import { BookHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const deleteOneBook: BookHandlers["delete"] = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await prisma.book.delete({
      where: {
        id,
      },
    });
    res.status(200).json(deletedBook);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default deleteOneBook;
