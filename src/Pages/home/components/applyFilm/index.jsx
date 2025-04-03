import React from "react";
import Button from "../../../../Components/common/button";

const ApplyFilm = () => {
  return (
    <div className="px-10 md:px-16 pb-12">
      <div className="bg-primary rounded-xl flex flex-col items-center py-10 px-5">
        <div className="text-white space-y-3">
          <div className="text-center text-3xl md:text-5xl uppercase font-bebas">
            Are you a filmmaker?
          </div>
          <div>
            The Short Film Show is democratizing the short film world. Get your
            film out into the world, meet and chat with hundreds of filmmakers,
            and earn income.
          </div>
        </div>
        <div className="mt-3">
          <Button className="bg-white !text-primary">
            Apply With Your Film
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ApplyFilm;
