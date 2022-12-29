import { Collection } from "@prisma/client";
import { RequestHandler } from "express";
import ResponseError from "../globalTypes/ResponseError";

type TCollectionBodyCreate = {
  name: string;
};

export interface ICollectionHandlers {
  getAll: RequestHandler<null, Collection[] | ResponseError, null>;
  getOne: RequestHandler<{ id: string }, Collection | ResponseError, null>;
  create: RequestHandler<
    null,
    Collection | ResponseError,
    TCollectionBodyCreate
  >;
  update: RequestHandler<
    { id: string },
    Collection | ResponseError,
    TCollectionBodyCreate
  >;
  delete: RequestHandler<{ id: string }, Collection | ResponseError, null>;
}
