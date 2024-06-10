import { BrowserRouter } from "react-router-dom";

import App from "./app.routes";

const Router = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default Router;
