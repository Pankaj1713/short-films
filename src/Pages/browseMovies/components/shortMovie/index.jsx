import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const categories = [
  { label: "Behind The Scene", value: "0" },
  { label: "Credits", value: "1" },
  { label: "Specification", value: "2" },
  { label: "Screenings/Awards", value: "3" },
];

const categoryImages = {
  0: "/images/movie.jpg",
  1: "/images/movie1.jpg",
  2: "/images/movie2.jpg",
  3: "/images/movie3.jpg",
};

const ShortMovie = () => {
  const [activeTab, setActiveTab] = useState("0");
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-black text-white px-4 py-6 md:px-10">
      <div className="mb-4">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-bebas">
          About Short Movie
        </h2>
      </div>

      <Tabs value={activeTab}>
        <TabsHeader
          className="bg-transparent border-b border-gray-700 p-0 rounded-none overflow-x-auto no-scrollbar"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-primary rounded-none shadow-none",
          }}
        >
          {categories.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => {
                setActiveTab(value);
                setIsPlaying(false);
              }}
              className={`pb-2 px-3 whitespace-nowrap text-base sm:text-lg font-semibold transition-colors duration-300 ${
                activeTab === value ? "text-white" : "text-paragraphColor"
              }`}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>

        <TabsBody>
          {categories.map(({ value }) => (
            <TabPanel key={value} value={value} className="p-0 mt-4 sm:mt-6">
              <div className="flex justify-center">
                <div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden">
                  <div
                    className="w-full h-full grayscale bg-black/80 cursor-pointer relative"
                    onClick={() => setIsPlaying(true)}
                  >
                    <img
                      src={categoryImages[value]}
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FaPlay className="text-white text-3xl sm:text-4xl" />
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default ShortMovie;
