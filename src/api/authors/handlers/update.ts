import { AuthorHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const updatedOneAuthor: AuthorHandlers["update"] = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;

    const updatedAuthor = await prisma.author.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
    res.status(200).json(updatedAuthor);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default updatedOneAuthor;
