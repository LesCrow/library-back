import { Router } from "express";
import controller from "../books/controller";

const router = Router();

router.get("/", controller.getAll);

export default router;
