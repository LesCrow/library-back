import { ResponseError } from "./../globalTypes/ResponseError";
import { RequestHandler } from "express";
import { User } from "@prisma/client";

type TUserWithoutPassword = Omit<User, "password">;
type TUserRegisterBody = Pick<User, "email" | "password">;

export interface IUserHandlers {
  getAll: RequestHandler<null, TUserWithoutPassword[] | ResponseError, null>;
  getOne: RequestHandler<
    { id: string },
    TUserWithoutPassword | ResponseError,
    null
  >;
  create: RequestHandler<
    null,
    TUserWithoutPassword | ResponseError,
    TUserRegisterBody
  >;
  delete: RequestHandler<
    { id: string },
    TUserWithoutPassword | ResponseError,
    null
  >;
}
