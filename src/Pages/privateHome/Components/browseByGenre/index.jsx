import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  { label: "Category 1", value: "0" },
  { label: "Category 2", value: "1" },
  { label: "Category 3", value: "2" },
  { label: "Category 4", value: "3" },
];

const categoryMovies = {
  0: [
    "/images/trendingImages/image.png",
    "/images/trendingImages/image2.png",
    "/images/trendingImages/image3.png",
    "/images/trendingImages/image4.png",
    "/images/trendingImages/image.png",
  ],
  1: [
    "/images/trendingImages/image2.png",
    "/images/trendingImages/image.png",
    "/images/trendingImages/image3.png",
  ],
  2: ["/images/trendingImages/image.png", "/images/trendingImages/image.png"],
  3: [
    "/images/trendingImages/image2.png",
    "/images/trendingImages/image3.png",
    "/images/trendingImages/image4.png",
  ],
};

const BrowseByGenre = () => {
  const [activeTab, setActiveTab] = useState("0");

  return (
    <div className="bg-black text-white p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl md:text-5xl font-bold font-bebas">
          BROWSE BY GENRE
        </h2>
        <Link to="#" className="text-primary font-semibold hover:underline">
          Show all
        </Link>
      </div>

      <Tabs value={activeTab}>
        <TabsHeader
          className="bg-transparent border-b border-gray-700 p-0 overflow-x-auto no-scrollbar rounded-none"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-primary rounded-none shadow-none",
          }}
        >
          {categories.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={`pb-2 px-2 text-lg font-semibold transition-colors duration-300 ${
                activeTab === value ? "text-white" : "text-paragraphColor"
              }`}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>

        <TabsBody>
          {categories.map(({ value }) => (
            <TabPanel key={value} value={value} className="p-0 mt-6">
              <div className="flex gap-4 overflow-x-auto scrollbar-hide">
                {categoryMovies[value]?.map((imgSrc, i) => (
                  <div
                    key={i}
                    className="min-w-[180px] h-[270px] rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={imgSrc}
                      alt={`movie-${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default BrowseByGenre;
