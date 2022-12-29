import { AuthorHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const updatedAuthor: AuthorHandlers["update"] = async (req, res) => {
  try {
    const { firstname, lastname } = req.body;
    const { id } = req.params;

    const updatedAuthor = await prisma.author.update({
      where: {
        id,
      },
      data: {
        firstname,
        lastname,
      },
    });
    res.status(200).json(updatedAuthor);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default updatedAuthor;
