import { useState } from "react";

const CreateTodo = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Create Todo
        </h2>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter todo title"
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="block text-gray-300 mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter description"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded font-semibold"
        >
          Create Todo
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;