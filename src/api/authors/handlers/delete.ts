import { AuthorHandlers } from "./../interface";
import prisma from "../../../../prisma/client";

const deleteOneAuthor: AuthorHandlers["delete"] = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAuthor = await prisma.author.delete({
      where: {
        id,
      },
    });
    res.status(200).json(deletedAuthor);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default deleteOneAuthor;
