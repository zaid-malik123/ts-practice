import express from "express";
import { createTodo, deleteTodo, getAllTodo, getSingleTodo, updateTodo } from "../controllers/todo.controllers.js";
import { isAuthenticated } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/create", isAuthenticated,createTodo )

router.get("/", isAuthenticated,getAllTodo)

router.put("/update/:id", isAuthenticated,updateTodo)

router.delete("/delete/:id", isAuthenticated,deleteTodo)

router.get("/:id", isAuthenticated, getSingleTodo )

export default router;
