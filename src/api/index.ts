import { Router } from "express";
import books from "./books/routes";
import authors from "./authors/routes";
import genres from "./genres/routes";
import auth from "./auth/routes";
import users from "./users/routes";

const router = Router();

router.use("/auth", auth);
router.use("/books", books);
router.use("/authors", authors);
router.use("/genres", genres);
router.use("/users", users);

export default router;
