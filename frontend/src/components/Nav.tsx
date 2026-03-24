import { Link } from "react-router-dom";

interface NavProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

export const Nav = ({ isLoggedIn, onLogout }: NavProps) => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <h2 className="text-xl font-bold">TodoApp</h2>

      {/* Links */}
      <div className="flex items-center gap-6">
        <Link to="/" className="hover:text-gray-300">Home</Link>

        {isLoggedIn ? (
          <>
            <Link to="/create" className="hover:text-gray-300">
              Create
            </Link>
            <Link to="/todos" className="hover:text-gray-300">
              My Todos
            </Link>
            <button
              onClick={onLogout}
              className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-gray-300">
              Login
            </Link>
            <Link to="/signup" className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};