import { Router } from "express";
import UserController from "../controllers/UserController";
import { verifyToken } from "../middleware/verifyToken";
import { checkDuplicateEmail } from "../middleware/verifySignUp";

const router = Router();

router.get("/", UserController.getAllUsers);
router.post("/", [checkDuplicateEmail], UserController.addUser);
router.get("/:id", UserController.getAUser);
router.put("/:id", UserController.updatedUser);
router.delete("/:id", [verifyToken], UserController.deleteUser);
router.post("/auth", UserController.loggedInUser);

export default router;
