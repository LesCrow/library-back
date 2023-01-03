import { Router } from "express";
import controller from "../users/controller";

const router = Router();

router.get("/", controller.getAll);

export default router;
