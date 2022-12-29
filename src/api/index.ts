import { Router } from "express";
import books from "./books/routes";
import authors from "./authors/routes";
import collections from "./collections/routes";
import auth from "./auth/routes";

const router = Router();

router.use("/auth", auth);
router.use("/books", books);
router.use("/authors", authors);
router.use("/collections", collections);

export default router;
