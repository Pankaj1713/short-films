// src/router/authLayout/privateLayout.js
import React from "react";
import AuthHeader from "../../Components/layout/header/authHeader";
import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <div>
      <AuthHeader buttonText="Log Out" variant="secondary" />
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
