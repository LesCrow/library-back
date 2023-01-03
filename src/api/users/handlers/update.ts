import { IUserHandlers } from "./../interface";
import prisma from "../../../../prisma/client";

const updateOneUser: IUserHandlers["update"] = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { id } = req.params;

    const updatedUser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        email,
        password,
      },
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default updateOneUser;
