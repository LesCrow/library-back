import { Author } from "@prisma/client";
import { RequestHandler } from "express";
import { ResponseError } from "../globalTypes/ResponseError";

type AuthorBodyCreate = {
  name: string;
};

export interface AuthorHandlers {
  getAll: RequestHandler<null, Author[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Author | ResponseError, null>;
  create: RequestHandler<null, Author | ResponseError, AuthorBodyCreate>;
  update: RequestHandler<
    { id: string },
    Author | ResponseError,
    AuthorBodyCreate
  >;
  delete: RequestHandler<{ id: string }, Author | ResponseError, null>;
}
