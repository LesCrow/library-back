import { IUserHandlers } from "./../interface";
import prisma from "../../../../prisma/client";

const createUser: IUserHandlers["create"] = async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = await prisma.user.create({
      data: {
        email,
        password,
      },
    });
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createUser;
