import React from "react";
import Button from "../../../../Components/common/button";

const LatestHits = () => {
  return (
    <div className="px-6 md:px-10 flex flex-col md:flex-row items-center w-full gap-6">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">
        <div className="text-white">
          <div className="text-3xl md:text-5xl uppercase font-bebas">
            Catch the Latest Short Film Hits
          </div>
          <div className="text-base md:text-xl text-paragraphColor leading-relaxed mt-2">
            Stay on the cutting edge of entertainment! The Short Film Show
            features the newest movies and TV shows, ensuring you never miss out
            on the hits everyone is talking about.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button variant="primary">Join Now</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/images/shortHits.png"
          alt="Hits"
          className="w-full max-w-sm md:max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default LatestHits;
