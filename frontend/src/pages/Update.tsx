import { useState } from "react";

const Update = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    isCompleted: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
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
          Update Todo
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
            placeholder="Update title"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Update description"
          />
        </div>

        {/* Completed */}
        <div className="mb-6 flex items-center gap-2">
          <input
            type="checkbox"
            name="isCompleted"
            checked={form.isCompleted}
            onChange={handleChange}
            className="w-4 h-4"
          />
          <label className="text-gray-300">Mark as completed</label>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded font-semibold"
        >
          Update Todo
        </button>
      </form>
    </div>
  );
};

export default Update;