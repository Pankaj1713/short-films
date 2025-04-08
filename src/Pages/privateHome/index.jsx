import React from "react";
import PrivateHeroSection from "./Components/privateHeroSection";
import TrendingSection from "../home/components/trendingSection";
import NewReleases from "./Components/trendingSection";

const PrivateHome = () => {
  return (
    <div className="bg-secondary">
      <PrivateHeroSection />
      <TrendingSection />
      <NewReleases />
    </div>
  );
};

export default PrivateHome;
