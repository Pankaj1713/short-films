import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
import { motion } from "framer-motion";

const plans = [
  {
    name: "BASIC",
    monthlyPrice: 10,
    features: [
      true,
      true,
      true,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
  },
  {
    name: "PREMIUM",
    monthlyPrice: 15,
    features: [true, true, true, true, true, true, true, true, true, true],
  },
  {
    name: "PRO",
    monthlyPrice: 15,
    features: [true, true, true, true, true, true, true, true, true, true],
  },
];

const PricingPlans = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  return (
    <section className="bg-black text-white py-12 px-6 md:px-16">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center uppercase"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Affordable Plans
      </motion.h2>

      {/* Toggle Buttons */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setActiveTab("monthly")}
          className={`px-10 py-2 rounded-l-lg ${
            activeTab === "monthly"
              ? "bg-primary text-white"
              : "bg-bgGray text-white"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setActiveTab("annual")}
          className={`px-10 py-2 rounded-r-lg ${
            activeTab === "annual"
              ? "bg-primary text-white"
              : "bg-bgGray text-white"
          }`}
        >
          Annual
        </button>
      </div>

      {/* Pricing Cards with Animation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {plans.map((plan, index) => {
          const price =
            activeTab === "monthly"
              ? `$${plan.monthlyPrice}/month`
              : `$${(plan.monthlyPrice * 12 * 0.8).toFixed(0)}/year`;

          return (
            <motion.div
              key={index}
              className="bg-bgGray p-6 rounded-xl text-center shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold text-primary">{plan.name}</h3>
              <p className="text-2xl font-semibold mt-2">{price}</p>

              <ul className="mt-4 space-y-2 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex justify-between px-4 py-1">
                    <span>Quisque Posuere</span>
                    {feature ? (
                      <FaCheck className="text-green-500" />
                    ) : (
                      <RxCross2 className="text-red-500" />
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default PricingPlans;
