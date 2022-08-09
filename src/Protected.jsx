import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";
import { UsersContext } from "./contexts/UsersContext"
import Dashboard from "./pages/Dashboard";

export default function Protected() {
  const { signed } = useContext(UsersContext);
  return signed ? <Dashboard /> : <Navigate to="/" />;
}