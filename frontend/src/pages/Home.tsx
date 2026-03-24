import { useState } from "react";

interface Todo {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

const Home = () => {
  // 🔥 Hardcoded data
  const [todos] = useState<Todo[]>([
    {
      _id: "1",
      title: "Learn TypeScript",
      description: "Practice TS with React and backend",
      isCompleted: false,
    },
    {
      _id: "2",
      title: "Build Todo App",
      description: "Full stack project with auth",
      isCompleted: true,
    },
    {
      _id: "3",
      title: "Revise Backend",
      description: "RBAC, JWT, Validation",
      isCompleted: false,
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-8">My Todos 🚀</h1>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6">

        {todos.map((todo) => (
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
              <button className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-sm">
                View
              </button>

              <button className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded text-sm">
                Edit
              </button>

              <button className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm">
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