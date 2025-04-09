import React from "react";
import { motion } from "framer-motion";
import { FaCirclePlay } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { IMAGES } from "../../../../Components/constants/assets";


const movie = {
  image: IMAGES.GODILLA_IMAGE,
  title: "GODZILLA vs KONG",
  year: "2020",
  genre: "Action",
  director: "By Jon Favreau",
  duration: "2h 5min",
  rating: 4.5,
  description:
    "In 1954, Godzilla, a prehistoric alpha predator, is lured to Bikini Atoll in an attempt to kill him with a nuclear bomb. In 1999, Monarch scientists Ishiro Serizawa and Vivienne Graham investigate the skeleton of a monster similar to Godzilla in a cavern unearthed by a collapsed uranium mine in the Philippines.",
};

const Movies = () => {
  return (
    <div className=" bg-secondary text-white">
      <div className="relative w-full h-screen overflow-hidden text-white">
        {/* Background Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={movie.image}
            alt="Movie Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-10 md:px-20">
          {/* Movie Title Logo or Text */}
          <h1 className="text-4xl md:text-6xl font-extrabold font-bebas leading-tight drop-shadow-lg">
            {movie.title}
          </h1>

          {/* Meta */}
          <div className="flex gap-4 text-sm mt-4 opacity-80">
            <span>{movie.genre}</span>
            <span>•</span>
            <span>{movie.year}</span>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4 items-center ">
            <button className="flex items-center gap-2 px-6 py-2 bg-primary text-white font-semibold rounded-md hover:bg-secondary transition">
              <FaCirclePlay /> Watch
            </button>
            <button className="px-6 py-2 bg-white/20 hover:bg-white/30 border border-white/30 rounded-md transition backdrop-blur-md">
              Trailer
            </button>

            <button className="p-3 rounded-md bg-white/20 hover:bg-white/30 transition border border-white/30">
              <FaPlus />
            </button>
          </div>

          {/* Director + Duration */}
          <div className="mt-6 text-sm flex items-center gap-4">
            <span>{movie.director}</span>
            <span>|</span>
            <span>{movie.duration}</span>
          </div>

          {/* Description */}
          <p className="mt-4 leading-relaxed">{movie.description}</p>
        </div>
      </div>
      {/* Filmmaker BIO Section */}
      <div className="py-10 px-10 md:px-20">
        <h2 className="uppercase text-3xl md:text-5xl font-bebas mb-6">
          Filmmaker Bio
        </h2>

        <div className="bg-bgGray rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-start gap-6">
          <img
            src="images/profileImage.png"
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />

          <div className="flex-1">
            <div className="mb-2">
              <h3 className="text-lg font-bold w-fit border-b mb-[1px]">
                Jon Favreau
              </h3>
              <p className="text-sm ">Joined on 2020</p>
            </div>

            <p className="text-sm leading-relaxed text-paragraphColor mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              maximus fringilla lectus, id finibus metus tempus nec. Curabitur
              non porttitor neque, ac mattis lorem. Fusce at euismod neque, in
              elementum augue. Cras et vehicula nibh. Maecenas nulla metus,
              luctus lacinia quam et, ultricies cursus odio. Nulla tempor
              euismod bibendum. Suspendisse non elementum sem.
            </p>

            <p className="text-sm leading-relaxed text-paragraphColor">
              Aenean sit amet orci imperdiet mi maximus lacinia. Vestibulum id
              malesuada lorem. Nulla quis ullamcorper mi. Donec et arcu mattis,
              convallis lorem eget, rhoncus diam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
