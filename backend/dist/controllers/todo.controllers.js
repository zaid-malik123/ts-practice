import { Todo } from "../models/todo.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { TryCatch } from "../utils/AsyncHandler.js";
const createTodo = TryCatch(async (req, res) => {
    const { title, description } = req.body;
    const { id } = req.user;
    if (!title || !description) {
        throw new ApiError(400, "title and description are required");
    }
    const todo = await Todo.create({
        user: id,
        title,
        description,
    });
    return res
        .status(201)
        .json(new ApiResponse(201, todo, "Todo created successfully"));
});
const getAllTodo = TryCatch(async (req, res) => {
    const todos = await Todo.find({
        user: req.user.id
    });
    return res
        .status(200)
        .json(new ApiResponse(200, todos, "Todos fetched successfully"));
});
const updateTodo = TryCatch(async (req, res) => {
    const { id } = req.params;
    const { title, description, isCompleted } = req.body;
    const userId = req.user.id;
    const todo = await Todo.findOne({
        _id: id,
        user: userId
    });
    if (!todo) {
        throw new ApiError(404, "Todo not found");
    }
    // update fields if provided
    if (title)
        todo.title = title;
    if (description)
        todo.description = description;
    if (typeof isCompleted === "boolean") {
        todo.isCompleted = isCompleted;
    }
    await todo.save();
    return res
        .status(200)
        .json(new ApiResponse(200, todo, "Todo updated successfully"));
});
const deleteTodo = TryCatch(async (req, res) => {
    const { id } = req.params;
    const todo = await Todo.findOne({
        _id: id,
        user: req.user.id
    });
    if (!todo) {
        throw new ApiError(404, "Todo not found");
    }
    await todo.deleteOne();
    return res
        .status(200)
        .json(new ApiResponse(200, {}, "Todo deleted successfully"));
});
const getSingleTodo = TryCatch(async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;
    const todo = await Todo.findOne({
        _id: id,
        user: userId,
    });
    if (!todo) {
        throw new ApiError(404, "Todo not found");
    }
    return res
        .status(200)
        .json(new ApiResponse(200, todo, "Fetched successfully"));
});
export { createTodo, getAllTodo, updateTodo, deleteTodo, getSingleTodo };
//# sourceMappingURL=todo.controllers.js.map