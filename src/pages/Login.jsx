import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form);
      alert("Login successful");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-gray-100 rounded shadow w-80 space-y-4">
        <h2 className="text-xl font-bold">Login</h2>
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="border p-2 w-full" />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="border p-2 w-full" />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full">Login</button>
        <div className="flex justify-between text-sm">
          <Link to="/register" className="text-blue-600">Sign Up</Link>
          <Link to="/forgotPassword" className="text-red-600">Forgot Password?</Link>
        </div>
      </form>
    </div>
  );
}
