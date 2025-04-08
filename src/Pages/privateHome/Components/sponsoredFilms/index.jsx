import { motion } from "framer-motion";

const movies = [
  {
    title: "Pacific Rim Uprising",
    genre: "Drama",
    year: 2008,
    duration: "2h 5min",
    image: "/images/movies/movie1.jpg",
  },
  {
    title: "Pacific Rim Uprising",
    genre: "Drama",
    year: 2008,
    duration: "2h 5min",
    image: "/images/movies/movie2.jpg",
  },
  {
    title: "Pacific Rim Uprising",
    genre: "Drama",
    year: 2008,
    duration: "2h 5min",
    image: "/images/movies/movie3.jpg",
  },
  {
    title: "Pacific Rim Uprising",
    genre: "Drama",
    year: 2008,
    duration: "2h 5min",
    image: "/images/movies/movie4.jpg",
  },
  {
    title: "Jurassic World Dominion",
    genre: "Drama",
    year: 2008,
    duration: "2h 5min",
    image: "/images/movies/movie5.jpg",
  },
  {
    title: "Tenet",
    genre: "Drama",
    year: 2008,
    duration: "2h 5min",
    image: "/images/movies/movie6.jpg",
  },
];

export default function SponsoredFilms() {
  return (
    <div className="px-4 md:px-12 py-8 bg-black text-white">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 font-bebas">
        Sponsored Films
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {movies.map((movie, index) => (
          <motion.div
            key={index}
            className="relative rounded-xl overflow-hidden cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-64 object-cover"
            />
            {/* Top to bottom gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 to-transparent" />
            {/* Text content */}
            <div className="absolute bottom-0 p-4 z-10">
              <p className="text-sm text-white w-fit p-2 px-6 bg-gray-500 rounded-md text-center">
                {movie.genre}
              </p>
              <h3 className="text-lg font-semibold">{movie.title}</h3>
              <p className="text-xs text-white">
                {movie.year} • {movie.duration}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
