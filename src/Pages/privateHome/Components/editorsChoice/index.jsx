import React from "react";

const movieData = [
  { title: "Joker", image: "/images/movies/frame1.png" },
  { title: "Feel the Beat", image: "/images/movies/frame2.png" },
  { title: "Britt-Marie Was Here", image: "/images/movies/frame3.png" },
  { title: "Onward", image: "/images/movies/frame4.png" },
  { title: "Britt-Marie Was Here", image: "/images/movies/frame5.png" },
  { title: "Onward", image: "/images/movies/frame6.png" },
  { title: "Joker", image: "/images/movies/frame7.png" },
  { title: "Feel the Beat", image: "/images/movies/frame8.png" },
  { title: "Britt-Marie Was Here", image: "/images/movies/frame9.png" },
  { title: "Onward", image: "/images/movies/frame10.png" },
  { title: "Feel the Beat", image: "/images/movies/frame11.png" },
  { title: "Joker", image: "/images/movies/frame12.png" },
];

const EditorsChoice = () => {
  return (
    <div className="bg-black text-white p-6">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">EDITOR’S CHOICE</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movieData.map((movie, index) => (
          <div key={index}>
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-36 object-cover rounded-md"
            />
            <p className="mt-1 text-sm">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditorsChoice;
