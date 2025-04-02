import React from "react";
import PublicHeader from "../../Components/layout/header/publicHeader";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/layout/footer/footer";

const PublicLayout = () => {
  return (
    <div>
      <PublicHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PublicLayout;
