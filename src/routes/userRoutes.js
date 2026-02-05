import express from "express";
import { getAllUsers } from "../controllers/userController.js";
import { getUserById } from "../controllers/userController.js";
import { createUser } from "../controllers/userController.js";
import { updateUser } from "../controllers/userController.js";
import { deleteUser } from "../controllers/userController.js";
 
const router = express.Router();

router.get("/user", getAllUsers) ;
router.get("/user/:id", getUserById);
router.post("/user", createUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);


export default router;