import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IMAGES } from "../../../../Components/constants/assets";

const movies = [
  {
    image: IMAGES.BANNER_IMAGE,
    title: "PACIFIC RIM UPRISING",
    year: "2008",
    director: "By Jon Favreau",
    duration: "2h 5min",
    rating: 2,
    description:
      "From film studios to streaming services to online publishers, our solutions enable companies to implement more efficient digital content strategies.",
    totalDuration: 125,
    watchedTime: 45,
  },
  {
    image: IMAGES.BANNER_IMAGE1,
    title: "INCEPTION",
    year: "2010",
    director: "By Christopher Nolan",
    duration: "2h 28min",
    rating: 4.5,
    description:
      "A skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state.",
    totalDuration: 148,
    watchedTime: 60,
  },
  {
    image: IMAGES.BANNER_IMAGE2,
    title: "INTERSTELLAR",
    year: "2014",
    director: "By Christopher Nolan",
    duration: "2h 49min",
    rating: 5,
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    totalDuration: 169,
    watchedTime: 80,
  },
  {
    image: IMAGES.BANNER_IMAGE3,
    title: "AVENGERS: ENDGAME",
    year: "2019",
    director: "By Anthony Russo, Joe Russo",
    duration: "3h 2min",
    rating: 4.8,
    description:
      "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more.",
    totalDuration: 182,
    watchedTime: 95,
  },
  {
    image: IMAGES.BANNER_IMAGE4,
    title: "THE DARK KNIGHT",
    year: "2008",
    director: "By Christopher Nolan",
    duration: "2h 32min",
    rating: 5,
    description:
      "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on Gotham. Batman must accept one of the greatest tests.",
    totalDuration: 152,
    watchedTime: 50,
  },
];

const sliderVariants = {
  incoming: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.3,
    opacity: 0,
    rotate: direction > 0 ? 5 : -5,
  }),
  active: {
    x: 0,
    scale: [1, 1.1, 1],
    opacity: [0, 1],
    rotate: [2, 0, -2, 0],
  },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2,
    rotate: direction > 0 ? -5 : 5,
  }),
};

const sliderTransition = {
  duration: 1.2,
  ease: [0.42, 0, 0.58, 1],
};

const PrivateHeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === movies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  };

  const currentMovie = movies[currentIndex];
  const progress =
    (currentMovie.watchedTime / currentMovie.totalDuration) * 100;
  const remainingTime = currentMovie.totalDuration - currentMovie.watchedTime;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* AnimatePresence wrapper */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          initial="incoming"
          animate="active"
          exit="exit"
          variants={sliderVariants}
          transition={sliderTransition}
          className="absolute inset-0"
        >
          <img
            src={currentMovie.image}
            alt="Movie Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" />
        </motion.div>
      </AnimatePresence>

      {/* Overlay Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 flex flex-col justify-center text-white px-10 z-10"
      >
        <h1 className="md:text-[56px] text-3xl font-bold font-bebas">
          {currentMovie.title}
        </h1>
        <div className="flex items-center gap-4 mt-2 text-sm">
          <span>{currentMovie.year}</span>
          <span>|</span>
          <span>{currentMovie.director}</span>
          <span>|</span>
          <span>{currentMovie.duration}</span>
          <span className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => {
              if (i + 1 <= Math.floor(currentMovie.rating)) {
                return <FaStar key={i} className="text-primary" />;
              } else if (
                i + 1 === Math.floor(currentMovie.rating) + 1 &&
                currentMovie.rating % 1 !== 0
              ) {
                return <FaStarHalfAlt key={i} className="text-primary" />;
              } else {
                return <FaStar key={i} className="text-gray-500" />;
              }
            })}
          </span>
        </div>
        <p className="mt-4 max-w-lg">{currentMovie.description}</p>

        {/* Progress Bar */}
        <div className="mt-4 w-full max-w-md flex items-center gap-2">
          <div className="w-full h-2 bg-gray-700 rounded-full relative min-w-0">
            <div
              className="h-full bg-white rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-sm flex-shrink-0">
            {remainingTime}m remaining
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg w-1/2"
        >
          ▶ Watch
        </motion.button>
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>

      {/* Navigation Buttons */}
      <div className="absolute inset-x-0 bottom-10 flex justify-between items-center px-10 text-white z-20">
        <button
          className="p-3 bg-white rounded-full text-secondary cursor-pointer hover:scale-110 transition duration-300 shadow-lg"
          onClick={handlePrev}
        >
          <MdKeyboardArrowLeft size={24} />
        </button>
        <button
          className="p-3 bg-white rounded-full text-secondary cursor-pointer hover:scale-110 transition duration-300 shadow-lg"
          onClick={handleNext}
        >
          <MdKeyboardArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default PrivateHeroSection;
