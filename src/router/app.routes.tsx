import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import RegisterUser from "../pages/registerUser";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cadastro" element={<RegisterUser />} />
  </Routes>
);
