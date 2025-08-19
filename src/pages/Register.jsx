import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      alert("Registration successful");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-gray-100 rounded shadow w-80 space-y-4">
        <h2 className="text-xl font-bold">Register</h2>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="border p-2 w-full" />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="border p-2 w-full" />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="border p-2 w-full" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">Register</button>
        <p className="text-sm">
          Already have an account? <Link to="/login" className="text-green-600">Login</Link>
        </p>
      </form>
    </div>
  );
}
