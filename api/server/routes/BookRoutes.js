import { Router } from "express";
import BookController from "../controllers/BookController";
import { verifyToken } from "../middleware/verifyToken";

const router = Router();

router.get("/", BookController.getAllBooks);
router.post("/", [verifyToken], BookController.addBook);
router.get("/:id", BookController.getABook);
router.put("/:id", BookController.updatedBook);
router.delete("/:id", BookController.deleteBook);

export default router;
