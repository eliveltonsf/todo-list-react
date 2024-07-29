import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import RegisterUser from "../pages/registerUser";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/cadastro" element={<RegisterUser />} />
  </Routes>
);
