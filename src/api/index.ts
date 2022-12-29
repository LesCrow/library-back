import { Router } from "express";
import books from "./books/routes";
import authors from "./authors/routes";
import collections from "./collections/routes";

const router = Router();

router.use("/books", books);
router.use("/authors", authors);
router.use("/collections", collections);

export default router;
