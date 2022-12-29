import { AuthorHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const createAuthor: AuthorHandlers["create"] = async (req, res) => {
  try {
    const { firstname, lastname } = req.body;
    const newAuthor = await prisma.author.create({
      data: {
        firstname,
        lastname,
      },
    });
    res.status(200).json(newAuthor);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createAuthor;
