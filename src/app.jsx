import { Route, Routes } from "react-router-dom";

import { ClientRoutes } from "./const/ClientRoutes";

import LoginPage from "./pages/AuthPage/LoginPage";
import Dashboard from "./pages/DashBoard/Index";
import Home from "./pages/DashBoard/Home";
import Earnings from "./pages/DashBoard/Earnings";
import NotFoundPage from "./pages/NotFoundPage";
import Rent from "./pages/DashBoard/Rent";
import Dividends from "./pages/DashBoard/Dividends";
import Index from "./pages/LandingScreen/Index";
import OtpPage from "./pages/AuthPage/OtpPage";

import { useEffect, useState } from "react";

const App = () => {
  const [isAuth, setIsAuth] = useState(() => {
    const token = localStorage.getItem("token");
    return !token;
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuth(!token);
  }, []);

  return (
    <>
      <Routes>
        {isAuth ? (
          <Route index element={<Index />} />
        ) : (
          <Route path={ClientRoutes.INDEX_ROUTE} element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path={ClientRoutes.EARNINGS_ROUTE} element={<Earnings />} />
            <Route path={ClientRoutes.RENT_ROUTE} element={<Rent />} />
            <Route
              path={ClientRoutes.DIVIDENDS_ROUTE}
              element={<Dividends />}
            />
          </Route>
        )}
        <Route path={ClientRoutes.LOGIN_ROUTE} element={<LoginPage />} />
        <Route path={ClientRoutes.OTP_ROUTE} element={<OtpPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
