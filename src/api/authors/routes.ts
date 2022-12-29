import { Router } from "express";
import controller from "../authors/controller";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.deleteOneAuthor);

export default router;
