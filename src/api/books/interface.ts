import { Book } from "@prisma/client";
import { RequestHandler } from "express";
import ResponseError from "../globalTypes/ResponseError";

type BookBodyCreate = {
  title: string;
  authorId: string;
  collectionId: string;
};

type BookBodyUpdate = {
  title: string;
  authorId: string;
  collectionId: string;
};

type GetAllQueryParams = {
  author: "true" | undefined;
  collection: "true" | undefined;
};

export interface BookHandlers {
  getAll: RequestHandler<null, Book[] | ResponseError, null, GetAllQueryParams>;
  getOne: RequestHandler<{ id: string }, Book | ResponseError, null>;
  create: RequestHandler<null, Book | ResponseError, BookBodyCreate>;
  update: RequestHandler<{ id: string }, Book | ResponseError, BookBodyUpdate>;
  delete: RequestHandler<{ id: string }, Book | ResponseError, null>;
}
