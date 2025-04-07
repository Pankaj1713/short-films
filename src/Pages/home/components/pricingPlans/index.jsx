import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
import { motion } from "framer-motion";
import Button from "../../../../Components/common/button";
import { ROUTES } from "../../../../router/routes";
import PrivateHeader from "../../../../Components/layout/header/privateHeader";

const plans = [
  {
    name: "FREE",
    monthlyPrice: 0,
    priceLabel: "Ad-Supported",
    buttonText: "Start Free Trial",
    features: [
      { label: "Ads", value: true },
      { label: "90 minutes per month viewing", value: true },
      { label: "HD available", value: false },
      { label: "Offline Download", value: false },
    ],
  },
  {
    name: "BASIC",
    monthlyPrice: 10,
    buttonText: "Proceed to Payment",
    features: [
      { label: "Ads", value: true },
      { label: "90 minutes per month viewing", value: true },
      { label: "HD available", value: true },
      { label: "Offline Download", value: true },
      { label: "No Ads", value: false },
      { label: "Watch on 2 devices", value: false },
    ],
  },
  {
    name: "PREMIUM",
    monthlyPrice: 15,
    buttonText: "Proceed to Payment",
    features: [
      { label: "Ads", value: true },
      { label: "90 minutes per month viewing", value: true },
      { label: "HD available", value: true },
      { label: "Offline Download", value: true },
      { label: "No Ads", value: true },
      { label: "Watch on 2 devices", value: true },
    ],
  },
  {
    name: "PRO",
    monthlyPrice: 20,
    buttonText: "Proceed to Payment",
    features: [
      { label: "Ads", value: true },
      { label: "90 minutes per month viewing", value: true },
      { label: "HD available", value: true },
      { label: "Offline Download", value: true },
      { label: "No Ads", value: true },
      { label: "Watch on 4 devices", value: true },
    ],
  },
];

const PricingPlans = ({ title }) => {
  const [activeTab, setActiveTab] = useState("monthly");

  const handlePlanSelect = (planName) => {
    console.log("Selected plan:", planName);
  };

  return (
    <>
      <section className="bg-black text-white py-12 px-6 md:px-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center uppercase font-bebas pt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title || "Choose Your Plan"}
        </motion.h2>

        {/* Toggle Buttons */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setActiveTab("monthly")}
            className={`px-10 md:px-20 py-2 rounded-l-lg ${
              activeTab === "monthly"
                ? "bg-primary text-white"
                : "bg-bgGray text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setActiveTab("annual")}
            className={`px-10 md:px-20 py-2 rounded-r-lg ${
              activeTab === "annual"
                ? "bg-primary text-white"
                : "bg-bgGray text-white"
            }`}
          >
            Annual
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-10">
          {plans.map((plan, index) => {
            const isFree = plan.monthlyPrice === 0;
            const price =
              isFree || activeTab === "monthly"
                ? plan.priceLabel || `$${plan.monthlyPrice}/month`
                : `$${(plan.monthlyPrice * 12 * 0.8).toFixed(0)}/year`;

            return (
              <motion.div
                key={index}
                className="bg-[#181818] p-6 rounded-2xl text-center shadow-lg flex flex-col justify-between"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-5">
                  <h3 className="text-sm font-semibold text-primary uppercase tracking-wide">
                    {plan.name}
                  </h3>
                  <p className="text-3xl font-extrabold mt-1">{price}</p>

                  <ul className="mt-6 space-y-3 text-base text-left">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex justify-between items-center px-1"
                      >
                        <span className="w-3/4">{feature.label}</span>
                        {feature.value ? (
                          <FaCheck className="text-green-500 text-lg" />
                        ) : (
                          <RxCross2 className="text-red-500 text-lg" />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant="secondary"
                  onClick={() => handlePlanSelect(plan.name)}
                >
                  {plan.buttonText}
                </Button>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default PricingPlans;
