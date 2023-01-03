import { Router } from "express";
import controller from "./controller";

const router = Router();

router.post("/signup", controller.signUp);

export default router;
