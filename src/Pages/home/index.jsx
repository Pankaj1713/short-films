import React from "react";
import HeroSection from "./components/heroSection";
import TrendingSection from "./components/trendingSection";
import LatestHits from "./components/latestHits";
import ReasonsToJoin from "./components/reasonsToJoin";
import PricingPlans from "./components/pricingPlans";

const Home = () => {
  return (
    <div className="bg-secondary ">
      <HeroSection />
      <TrendingSection />
      <LatestHits />
      <ReasonsToJoin />
      <PricingPlans />
    </div>
  );
};

export default Home;
