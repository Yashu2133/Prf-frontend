import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api";

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post(`/reset_password_confirm/${token}`, { password });
      alert("Password reset successful");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Reset failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-gray-100 rounded shadow w-80 space-y-4">
        <h2 className="text-xl font-bold">Reset Password</h2>
        <input type="password" placeholder="New password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 w-full" />
        <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded w-full">Reset</button>
      </form>
    </div>
  );
}
