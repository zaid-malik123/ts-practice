import express from "express";
import { errorHandler } from "./middleware/error.middleware.js";
import cors from "cors"
import cookieParser from "cookie-parser";
import "dotenv/config.js"

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(cookieParser())

import TodoRoutes from "./routes/todo.routes.js"
import UserRoutes from "./routes/user.routes.js"
import { connectDb } from "./db/db.js";

app.use("/api/todo", TodoRoutes)
app.use("/api/user", UserRoutes)

connectDb()
app.use(errorHandler)


app.listen(3000, () => {
    console.log("server is running on port 3000")
})