import React from "react";
import PrivateHeader from "../../Components/layout/header/privateHeader";
import Footer from "../../Components/layout/footer/footer";
import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <div>
      <PrivateHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PrivateLayout;
