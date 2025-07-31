import { Route, Routes } from "react-router-dom";

import { ClientRoutes } from "./const/ClientRoutes";

import LoginPage from "./pages/AuthPage/LoginPage";
import Dashboard from "./pages/DashBoard/Index";
import Home from "./pages/DashBoard/Home";
import Earnings from "./pages/DashBoard/Earnings";
import NotFoundPage from "./pages/NotFoundPage";
import Rent from "./pages/DashBoard/Rent";
import Dividends from "./pages/DashBoard/Dividends";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={ClientRoutes.LOGIN_ROUTE} element={<LoginPage />} />
        <Route path={ClientRoutes.DASHBOARD_ROUTE} element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path={ClientRoutes.EARNINGS_ROUTE} element={<Earnings />} />
          <Route path={ClientRoutes.RENT_ROUTE} element={<Rent />} />
          <Route path={ClientRoutes.DIVIDENDS_ROUTE} element={<Dividends />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
