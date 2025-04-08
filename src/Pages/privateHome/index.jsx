import React from "react";
import PrivateHeroSection from "./Components/privateHeroSection";
import TrendingSection from "../home/components/trendingSection";
import NewReleases from "./Components/trendingSection";
import EditorsChoice from "./Components/editorsChoice";
import SponsoredFilms from "./Components/sponsoredFilms";
import BehindTheScenes from "./Components/behindTheScenes";
import BrowseByGenre from "./Components/browseByGenre";

const PrivateHome = () => {
  return (
    <div className="bg-secondary">
      <PrivateHeroSection />
      <TrendingSection />
      <NewReleases />
      <EditorsChoice />
      <SponsoredFilms />
      <BehindTheScenes />
      <BrowseByGenre />
    </div>
  );
};

export default PrivateHome;
