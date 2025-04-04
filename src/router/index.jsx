import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PublicLayout from "./authLayout/publicLayout";
import Home from "../Pages/home";
import { ROUTES } from "./routes";
import Login from "../Pages/auth/login";
import Signup from "../Pages/auth/signup";
import ForgotPassword from "../Pages/auth/forgotPassword";
import Otp from "../Pages/auth/otp";
import ResetPassword from "../Pages/auth/resetPassword";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<PublicLayout />}>
            <Route index element={<Home />} />
          </Route>

          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Signup />} />
          <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
          <Route path={ROUTES.OTP} element={<Otp />} />
          <Route path={ROUTES.RESET_PASSWORD} element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
