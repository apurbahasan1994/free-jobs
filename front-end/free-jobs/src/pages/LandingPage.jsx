import image from "../assets/image/job-man.jpg";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaBriefcase } from "react-icons/fa";
export default function LandingPage() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex flex-row px-20 justify-between items-center">
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-3 mb-4">
            <div className="text-4xl font-bold">
              There Are 93,178 Postings Here For you!
            </div>
            <div className="text-2xl text-secondary-text-color">
              Find Jobs, Employment & Career Opportunities
            </div>
          </div>
          <div className="flex flex-row rounded-lg overflow-hidden border-[1px] py-7 px-5">
            <div className="flex flex-row">
              <div className="border-r-[1px] px-4 flex flex-row items-center gap-2">
                <CiSearch className="text-xl font-bold" />
                <input
                  placeholder="Job title, keywords, or company"
                  className="outline-none border-none w-full h-full"
                />
              </div>
              <div className="border-l-0 px-4 flex flex-row items-center gap-2">
                <CiLocationOn className="text-xl font-bold" />
                <input
                  placeholder="City or postcode"
                  className="outline-none border-none w-full h-full"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <button className="bg-blue-color text-white py-3 px-8 rounded-lg">
                Find Job
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-x-3">
            <div className="font-bold text-secondary-text-color">
              Popular Searches :{" "}
            </div>
            <div className="text-secondary-text-color">
              <ul className="flex flex-row gap-x-3">
                <li>Desiner,</li>
                <li>Developer,</li>
                <li>Angular,</li>
                <li>React,</li>
                <li>Node</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-lg">
          <div className="relative">
            <div className="flex flex-row items-center justify-center gap-5 absolute top-40 left-[-30px] shadow-sm border-[1px] rounded-md max-w-60 p-4 py-3">
              <div className="px-4 py-4 bg-light-blue-color rounded-md">
                <FaBriefcase className="text-3xl text-dark-blue font-bold" />
              </div>
              <div className="text-lg font-[600]">Post Job for free</div>
            </div>
            <img src={image} className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
