import React from "react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: "/images/icons/shortFilm.svg",
    title: "New Short Film Every Day",
    description:
      "The Short Film Show carefully pick extensive library of short films, documentaries, animations, award-winning dramas, and more. Watch as much as you want, anytime you want.",
  },
  {
    icon: "/images/icons/filmmakers.svg",
    title: "Support The Filmmakers",
    description:
      "Filmmakers first, always. Contribute to filmmakers with your subscription and enjoy access to the industry's most talented creators. We share 70% of our revenue with filmmakers.",
  },
  {
    icon: "/images/icons/lovers.svg",
    title: "Bringing Film Lovers Together",
    description:
      "The Short Film Show is building a cinema community. Engage with fellow film enthusiasts, share your favourite films, and connect with others who share your passion. Experience cinema together.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ReasonsToJoin = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="bg-black text-white py-12 px-6 md:px-16"
    >
      <motion.h2
        variants={itemVariants}
        className="text-3xl md:text-5xl font-bold text-center uppercase font-bebas"
      >
        More Reasons to Join the Short Film Show
      </motion.h2>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
      >
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-[#1E1E1E] p-6 rounded-xl text-center shadow-lg"
          >
            <img
              src={reason.icon}
              alt={reason.title}
              className="mx-auto w-14 h-14"
            />
            <div className="text-2xl font-semibold mt-4">{reason.title}</div>
            <p className="text-paragraphColor mt-2">{reason.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ReasonsToJoin;
