import axios from "axios";
import { useContext, useEffect, useState } from "react";
import type { ApiResponse } from "../types/api.types";
import type { todoI } from "../types/todo.types";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";



const Home = () => {
  const {user} = useContext(UserContext)!
  const [todos, setTodos] = useState<todoI[]>([
  ]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchTodos = async () => {
      try {

        const res = await axios.get<ApiResponse<todoI[]>>("http://localhost:3000/api/todo/", {
          withCredentials: true
        } )
        setTodos(res.data.data)
        
      } catch (error: unknown) {
        if(error instanceof Error) {
          console.log(error)
        }
        console.log(error)
      }

    }
    fetchTodos()
  }, [])

  const deleteTodo = async (id: string) => {
    const res = await axios.delete(`http://localhost:3000/api/todo/delete/${id}`, {
      withCredentials: true
    })
    alert(res.data.data.message)
    setTodos((prev) => prev.filter((todo) => todo._id !== id));
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-8">My Todos 🚀</h1>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6">

        {user && todos.map((todo) => (
          <div
            key={todo._id}
            className="bg-gray-800 p-5 rounded-xl shadow hover:scale-105 transition"
          >
            {/* Title */}
            <h2 className="text-xl font-semibold mb-2">
              {todo.title}
            </h2>

            {/* Description */}
            <p className="text-gray-400 mb-4">
              {todo.description}
            </p>

            {/* Status */}
            <span
              className={`px-3 py-1 text-sm rounded ${
                todo.isCompleted
                  ? "bg-green-500"
                  : "bg-yellow-500 text-black"
              }`}
            >
              {todo.isCompleted ? "Completed" : "Pending"}
            </span>

            {/* Buttons */}
            <div className="flex gap-3 mt-4">
              <button onClick={() => navigate(`/${todo._id}`)} className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-sm">
                View
              </button>

              <button onClick={() => navigate(`/update/${todo._id}`)} className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded text-sm">
                Edit
              </button>

              <button onClick={() => deleteTodo(todo._id)} className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm">
                Delete
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Home;