import { useState } from "react";
import apple from "../../assets/image/apple.png";
import JobListing from "../JobCard";

export function Tabs({ tabsData }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="border-b w-96 flex space-x-8 justify-center items-center">
          {tabsData.map((tab, idx) => {
            return (
              <button
                key={idx}
                className={`py-2 font-bold border-b-4 transition-colors duration-300 ${
                  idx === activeTabIndex
                    ? "border-blue-color"
                    : "border-transparent hover:border-gray-200"
                }`}
                onClick={() => setActiveTabIndex(idx)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
      <div className="py-4">
        <div className="mt-10 grid grid-cols-2 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => {
            return (
              <JobListing
                key={i}
                jobTitle="IOS Developer"
                company="Apple"
                location="Dhaka, Bangladesh"
                salary="10000"
                jobType="Full Time"
                tags={["Technology", "WordPress"]}
                companyImage={apple}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
