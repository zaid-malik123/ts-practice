import { useState } from "react";

const SingleTodo = () => {
  // temporary dummy data (baad me API se aayega)
  const [todo] = useState({
    title: "Learn TypeScript",
    description: "Practice TS with React and backend",
    isCompleted: false,
  });

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-lg">

        {/* Title */}
        <h2 className="text-2xl font-bold text-white mb-4">
          {todo.title}
        </h2>

        {/* Description */}
        <p className="text-gray-300 mb-6">
          {todo.description}
        </p>

        {/* Status */}
        <div className="mb-6">
          <span
            className={`px-3 py-1 rounded text-sm ${
              todo.isCompleted
                ? "bg-green-500 text-white"
                : "bg-yellow-500 text-black"
            }`}
          >
            {todo.isCompleted ? "Completed" : "Pending"}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white">
            Edit
          </button>

          <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleTodo;