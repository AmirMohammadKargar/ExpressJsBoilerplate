import { Router } from "express";
import { authenticate } from "../../../../common/middlewares/auth";
import { validate } from "../../../../common/middlewares/validate";
import { createUserSchema } from "../../application/schemas/createUserSchema";
import { updateUserSchema } from "../../application/schemas/updateUserSchema";
import { UserService } from "../../application/UserService";
import { UserRepository } from "../../infrastructure/UserRepository";
import { UserController } from "../controllers/UserController";

const router = Router();
const userRep = new UserRepository();
const userService = new UserService(userRep);
const controller = new UserController(userService);

router.get("/:id", authenticate(), controller.findUser.bind(controller));
router.put(
  "/:id",
  validate(updateUserSchema),
  controller.updateUser.bind(controller)
);
router.post(
  "/",
  validate(createUserSchema),
  controller.createUser.bind(controller)
);

export default router;
