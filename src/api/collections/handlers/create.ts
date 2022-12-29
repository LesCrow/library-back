import { ICollectionHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const createCollection: ICollectionHandlers["create"] = async (req, res) => {
  try {
    const { name } = req.body;
    const newCollection = await prisma.collection.create({
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

export default createCollection;
