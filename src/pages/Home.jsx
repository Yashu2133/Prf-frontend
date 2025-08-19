import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6">
      <h1 className="text-3xl font-bold">Welcome to the Reset App</h1>
      {user ? (
        <p className="text-lg">Logged in as <b>{user.name}</b></p>
      ) : (
        <p className="text-lg">You are not logged in</p>
      )}
      <div className="space-x-4">
        <Link to="/register" className="bg-blue-500 text-white px-4 py-2 rounded">Register</Link>
        <Link to="/login" className="bg-green-500 text-white px-4 py-2 rounded">Login</Link>
        <Link to="/logout" className="bg-red-500 text-white px-4 py-2 rounded">Logout</Link>
      </div>
    </div>
  );
}
