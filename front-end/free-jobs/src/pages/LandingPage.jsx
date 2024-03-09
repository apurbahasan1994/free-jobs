import image from "../assets/image/job-man.png";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaBriefcase } from "react-icons/fa";
import { FaRegMoneyBill1, FaBullhorn } from "react-icons/fa6";
import { SiMaterialdesign } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { Tabs } from "../component/Tab";
export default function LandingPage() {
  return (
    <div className="h-screen mx-auto">
      <div style={{ backgroundImage: "url('/src/assets/image/bg.png')" }}>
        <div className="max-w-screen-2xl mx-auto flex flex-row px-20 pb-20 justify-between items-center">
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-3 mb-4">
              <div className="text-4xl font-bold">
                There Are 93,178 Postings Here For you!
              </div>
              <div className="text-2xl text-secondary-text-color">
                Find Jobs, Employment & Career Opportunities
              </div>
            </div>
            <div className="flex flex-row rounded-lg overflow-hidden border-[1px] py-7 px-5 bg-white">
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
              <div className="flex flex-row items-center justify-center gap-5 absolute top-40 left-[-30px] shadow-cutomShadow border-[1px] rounded-md max-w-60 p-4 py-3">
                <div className="px-4 py-4 bg-light-blue-color rounded-md">
                  <FaBriefcase className="text-3xl text-dark-blue font-bold" />
                </div>
                <div className="text-lg font-[600]">Post Job for free</div>
              </div>
              <img src={image} className="object-cover max-w-full max-h-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-[1px] py-32">
        <div className="max-w-screen-2xl mx-auto">
          <div className="px-20 flex flex-col gap-12">
            <div className="text-center flex flex-col gap-3">
              <div className="text-3xl font-bold">Popular Job Categories</div>
              <div className="text-sm text-secondary-text-color">
                2020 jobs live - 293 added today.
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {jobsCategories.map((x, i) => {
                return (
                  <div
                    key={i}
                    className="border-[1px] px-4 py-10 rounded-md flex items-center gap-6 group col-auto hover:shadow-cutomShadow transition-all duration-300 ease-in-out"
                  >
                    <div className="w-16 h-16 text-2xl bg-light-blue-color flex items-center justify-center rounded-md  group-hover:bg-blue-color group-hover:text-white">
                      {x.icon}
                    </div>
                    <div>
                      <div className="font-bold">{x.type}</div>
                      <div className="text-secondary-text-color">
                        ({x.openPositions} open positions)
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="border-b-[1px] py-32">
        <div className="max-w-screen-2xl mx-auto">
          <div className="px-20 flex flex-col gap-12">
            <div className="text-center flex flex-col gap-3">
              <div className="text-3xl font-bold">Latest Jobs</div>
              <div className="text-sm text-secondary-text-color">
                Know your worth and find the job that qualify your life
              </div>
            </div>
            <Tabs
              tabsData={[
                {
                  label: "All Jobs",
                },
                {
                  label: "Full Time",
                },
                {
                  label: "Part Time",
                },
                {
                  label: "Remote",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const jobsCategories = [
  { type: "Accounting / Finane", openPositions: 2, icon: <FaRegMoneyBill1 /> },
  { type: "Marketting", openPositions: 2, icon: <FaBullhorn /> },
  { type: "Design", openPositions: 2, icon: <SiMaterialdesign /> },
  { type: "Development", openPositions: 2, icon: <FaLaptopCode /> },
  { type: "Health Care", openPositions: 2, icon: <MdHealthAndSafety /> },
  { type: "Health Care", openPositions: 2, icon: <MdHealthAndSafety /> },
  { type: "Health Care", openPositions: 2, icon: <MdHealthAndSafety /> },
  { type: "Health Care", openPositions: 2, icon: <MdHealthAndSafety /> },
  { type: "Health Care", openPositions: 2, icon: <MdHealthAndSafety /> },
];
