import prisma from "../../../../prisma/client";
import { ICollectionHandlers } from "../interface";

const deleteOneCollection: ICollectionHandlers["delete"] = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCollection = await prisma.collection.delete({
      where: {
        id,
      },
    });
    res.status(200).json(deletedCollection);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default deleteOneCollection;
