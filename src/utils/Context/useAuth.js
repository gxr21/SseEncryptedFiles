import { useContext } from "react";
import { AuthContext } from "./AuthContext";

// دالة مخصصة لاستخدام AuthContext
export function useAuth() {
  return useContext(AuthContext);
}