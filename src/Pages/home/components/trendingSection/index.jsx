import React, { useRef } from "react";
import { motion } from "framer-motion";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const trendingMovies = [
  {
    id: 1,
    title: "Blade Runner 2049",
    image: "/images/trendingImages/image.png",
    count: "images/count/1.svg",
  },
  {
    id: 2,
    title: "Thor: The Dark World",
    image: "/images/trendingImages/image1.png",
    count: "images/count/2.svg",
  },
  {
    id: 3,
    title: "Joker",
    image: "/images/trendingImages/image2.png",
    count: "images/count/3.svg",
  },
  {
    id: 4,
    title: "Doom",
    image: "/images/trendingImages/image.png",
    count: "images/count/4.svg",
  },
  {
    id: 5,
    title: "Doom",
    image: "/images/trendingImages/image1.png",
    count: "images/count/1.svg",
  },
  {
    id: 6,
    title: "Doom",
    image: "/images/trendingImages/image2.png",
    count: "images/count/2.svg",
  },
  {
    id: 7,
    title: "Doom",
    image: "/images/trendingImages/image.png",
    count: "images/count/3.svg",
  },
  {
    id: 8,
    title: "Doom",
    image: "/images/trendingImages/image.png",
    count: "images/count/4.svg",
  },
  {
    id: 9,
    title: "Doom",
    image: "/images/trendingImages/image1.png",
    count: "images/count/1.svg",
  },
  {
    id: 10,
    title: "Doom",
    image: "/images/trendingImages/image2.png",
    count: "images/count/2.svg",
  },
];

const TrendingSection = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="px-10 py-10 md:py-20 text-white">
      <h2 className="text-2xl md:text-5xl mb-6">Trending Now</h2>
      <div className="relative">
        <div
          ref={carouselRef}
          className="flex gap-14 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {trendingMovies.map((movie) => (
            <div key={movie.id} className="flex items-center">
              <img
                src={movie.count}
                alt={movie.title}
                className="w-16 h-16 object-contain mt-20 pr-5"
              />
              <motion.div
                className="overflow-hidden flex-shrink-0 w-40 md:w-48 relative"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>
            </div>
          ))}
        </div>

        <div className="flex justify-between gap-6 mt-6">
          <button
            className="p-3 bg-white rounded-full text-secondary cursor-pointer hover:scale-110 transition duration-300 shadow-lg"
            onClick={scrollLeft}
          >
            <MdKeyboardArrowLeft />
          </button>
          <button
            className="p-3 bg-white rounded-full text-secondary cursor-pointer hover:scale-110 transition duration-300 shadow-lg"
            onClick={scrollRight}
          >
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingSection;
