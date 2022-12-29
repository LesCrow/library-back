import { Router } from "express";
import controller from "../collections/controller";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", controller.create);
router.delete("/:id", controller.deleteOneAuthor);

export default router;
