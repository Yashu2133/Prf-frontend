import { useState } from "react";
import API from "../api";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/reset_password", { email });
      alert("Password reset email sent!");
    } catch (err) {
      alert(err.response?.data?.message || "Error sending email");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-gray-100 rounded shadow w-80 space-y-4">
        <h2 className="text-xl font-bold">Forgot Password</h2>
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 w-full" />
        <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded w-full">Send Reset Link</button>
      </form>
    </div>
  );
}
