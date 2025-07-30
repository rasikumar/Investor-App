import { Route, Routes } from "react-router-dom";

import { ClientRoutes } from "./const/ClientRoutes";

import LoginPage from "./pages/AuthPage/LoginPage";
import Dashboard from "./pages/DashBoard/Index";
import PlayGround from "./pages/DashBoard/PlayGround";
import Home from "./pages/DashBoard/Home";
const App = () => {
  return (
    <>
      <Routes>
        <Route path={ClientRoutes.LOGIN_ROUTE} element={<LoginPage />} />
        <Route path={ClientRoutes.DASHBOARD_ROUTE} element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="playground" element={<PlayGround />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
