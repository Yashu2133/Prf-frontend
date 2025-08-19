import { createContext, useContext, useState } from "react";
import API from "../api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const register = async (form) => {
    const res = await API.post("/register", form);
    setUser(res.data.user);
    return res.data;
  };

  const login = async (form) => {
    const res = await API.post("/login", form);
    setUser(res.data.user);
    return res.data;
  };

  const logout = async () => {
    await API.post("/logout");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
