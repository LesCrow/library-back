import { Genre } from "@prisma/client";
import { RequestHandler } from "express";
import { ResponseError } from "../globalTypes/ResponseError";

type TGenreBodyCreate = {
  name: string;
};

export interface IGenreHandlers {
  getAll: RequestHandler<null, Genre[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Genre | ResponseError, null>;
  create: RequestHandler<null, Genre | ResponseError, TGenreBodyCreate>;
  update: RequestHandler<
    { id: string },
    Genre | ResponseError,
    TGenreBodyCreate
  >;
  delete: RequestHandler<{ id: string }, Genre | ResponseError, null>;
}
