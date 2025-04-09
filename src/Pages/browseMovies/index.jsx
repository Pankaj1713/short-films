import React from "react";
import Movies from "./components/movies";
import ShortMovie from "./components/shortMovie";
import RelatedFilms from "./components/relatedFilms";

const BrowseMovies = () => {
  return (
    <div className=" bg-secondary text-white">
      <Movies />
      <ShortMovie />
      <RelatedFilms />
    </div>
  );
};

export default BrowseMovies;
