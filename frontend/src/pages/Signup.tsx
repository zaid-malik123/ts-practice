import { useState } from "react";

const Signup = () => {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Signup
        </h2>

        {/* Username */}
        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Username</label>
          <input
            type="text"
            name="userName"
            value={form.userName}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter username"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter email"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-gray-300 mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter password"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-semibold"
        >
          Create Account
        </button>

        {/* Extra */}
        <p className="text-gray-400 text-sm mt-4 text-center">
          Already have an account?{" "}
          <span className="text-blue-400 cursor-pointer">Login</span>
        </p>
      </form>
    </div>
  );
};

export default Signup;