import { BrowserRouter } from "react-router-dom";

import { useAuth } from "../hooks/auth";
import { AppRoutes } from "./app.routes";
import AuthRoutes from "./auth.routes";

const Router = () => {
  const { token } = useAuth();
  return (
    <BrowserRouter>{token ? <AuthRoutes /> : <AppRoutes />}</BrowserRouter>
  );
};

export default Router;
