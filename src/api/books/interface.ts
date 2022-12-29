import { ResponseError } from "./../globalTypes/ResponseError";
import { Book } from "@prisma/client";
import { RequestHandler } from "express";

type BookBodyCreate = {
  title: string;
  authorId: string;
  genreId: string;
};

type BookBodyUpdate = {
  title: string;
  authorId: string;
  genreId: string;
};

type GetAllQueryParams = {
  author: "true" | undefined;
  genre: "true" | undefined;
};

export interface BookHandlers {
  getAll: RequestHandler<null, Book[] | ResponseError, null, GetAllQueryParams>;
  getOne: RequestHandler<{ id: string }, Book | ResponseError, null>;
  create: RequestHandler<null, Book | ResponseError, BookBodyCreate>;
  update: RequestHandler<{ id: string }, Book | ResponseError, BookBodyUpdate>;
  delete: RequestHandler<{ id: string }, Book | ResponseError, null>;
}
