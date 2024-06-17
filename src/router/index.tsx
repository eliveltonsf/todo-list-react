import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";

const Router = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default Router;
