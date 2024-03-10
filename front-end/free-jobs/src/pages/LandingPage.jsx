import image from "../assets/image/job-man.png";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaBriefcase } from "react-icons/fa";
import { FaRegMoneyBill1, FaBullhorn } from "react-icons/fa6";
import { SiMaterialdesign } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { Tabs } from "../component/Tab";
import { Link } from "react-router-dom";
import { MdOutlineMissedVideoCall } from "react-icons/md";
import { CiTimer } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { GiArcheryTarget } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import user1 from "../assets/image/user1.jpg";
import user2 from "../assets/image/user2.jpg";
import user3 from "../assets/image/user3.jpg";
import user4 from "../assets/image/user4.jpg";
import user5 from "../assets/image/user5.jpg";
import user6 from "../assets/image/user6.jpg";
import user7 from "../assets/image/user7.jpg";
import user8 from "../assets/image/user8.jpg";
import recruting from "../assets/image/recruting.png";
import candidate from "../assets/image/candidate.jpg";
const users = [user1, user2, user3, user4, user5, user6, user7, user8];
export default function LandingPage() {
  return (
    <div className="text-text-color">
      <div className="bg-hero-bg-color text-white">
        <div className="max-w-screen-2xl mx-auto flex flex-row px-20 pb-20 justify-between items-center">
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-3 mb-4">
              <div className="text-4xl font-bold">
                There Are 93,178 Postings Here For you!
              </div>
              <div className="text-2xl text-white">
                Find Jobs, Employment & Career Opportunities
              </div>
            </div>
            <div className="flex flex-row rounded-lg overflow-hidden border-[1px] py-7 px-5 bg-white text-secondary-text-color">
              <div className="flex flex-row">
                <div className="border-r-[1px] px-4 flex flex-row items-center gap-2">
                  <CiSearch className="text-xl font-bold text-secondary-text-color" />
                  <input
                    placeholder="Job title, keywords, or company"
                    className="outline-none border-none w-full h-full"
                  />
                </div>
                <div className="border-l-0 px-4 flex flex-row items-center gap-2">
                  <CiLocationOn className="text-xl font-bold text-secondary-text-color" />
                  <input
                    placeholder="City or postcode"
                    className="outline-none border-none w-full h-full"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-center">
                <button className="bg-theme-color text-white py-3 px-8 rounded-lg">
                  Find Job
                </button>
              </div>
            </div>
            <div className="flex flex-row gap-x-3">
              <div className="font-bold text-white">Popular Searches : </div>
              <div className="text-white">
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
              <div className="flex flex-row items-center justify-center gap-5 bg-white text-text-color absolute top-40 left-[-30px] shadow-cutomShadow border-[1px] rounded-md max-w-60 p-4 py-3">
                <div className="px-4 py-4 bg-light-theme-color rounded-md">
                  <FaBriefcase className="text-3xl text-theme-color font-bold" />
                </div>
                <div className="text-lg font-[600]">Post Job for free</div>
              </div>
              <div className="flex flex-row items-center justify-center gap-5 bg-white text-text-color absolute top-16 right-[-63px] shadow-cutomShadow border-[1px] rounded-md max-w-60 p-4 py-3">
                <div className="flex flex-col gap-2 items-center">
                  <div className="text-3xl font-[600] text-theme-color">
                    2.5M+
                  </div>
                  <div className="tex-2xl text-secondary-text-color font-bold">
                    Jobs Available
                  </div>
                </div>
              </div>
              <img src={image} className="object-cover max-w-full max-h-full" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-light-cream py-8"
        style={{
          backgroundImage: "linear-gradient(45deg, #F6ECEA 0%, #F4F0E7 100%)",
        }}
      >
        <div className="max-w-screen-2xl mx-auto">
          <div className="px-20">
            <div className="grid grid-cols-4 justify-items-center">
              <div className="flex flex-col gap-1 text-center">
                <div className="text-[48px] font-bold leading-normal">
                  2.5M+
                </div>
                <div className="text-secondary-text-color text-lg font-semibold spacing tracking-2">
                  Jobs Available
                </div>
              </div>
              <div className="flex flex-col gap-1 text-center">
                <div className="text-[48px] font-bold leading-normal">
                  {" "}
                  189k+
                </div>
                <div className="text-secondary-text-color text-lg font-semibold spacing tracking-2">
                  New Jobs This Week!
                </div>
              </div>
              <div className="flex flex-col gap-1 text-center">
                <div className="text-[48px] font-bold leading-normal">
                  289k+
                </div>
                <div className="text-secondary-text-color text-lg font-semibold spacing tracking-2">
                  Companies Hiring
                </div>
              </div>
              <div className="flex flex-col gap-1 text-center">
                <div className="text-[48px] font-bold leading-normal">5M+</div>
                <div className="text-secondary-text-color text-lg font-semibold spacing tracking-2">
                  Candidates
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[80px]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="px-20 flex flex-col gap-12">
            <div className="text-center flex flex-col gap-3">
              <div className="text-[32px] font-bold">
                Popular Job Categories
              </div>
              <div className="text-xl text-secondary-text-color">
                2020 jobs live - 293 added today.
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {jobsCategories.map((x, i) => {
                return (
                  <div
                    key={i}
                    className="border-[1px] hover:border-theme-color px-4 py-10 rounded-md flex items-center gap-6 group col-auto hover:shadow-cutomShadow transition-all duration-300 ease-in-out"
                  >
                    <div className="w-16 h-16 text-2xl bg-light-theme-color flex items-center justify-center rounded-md  group-hover:bg-theme-color group-hover:text-white transition-all  duration-300 ease-in-out">
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
      <div className="py-[80px]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="px-20 flex flex-col gap-12">
            <div className="text-center flex flex-col gap-3">
              <div className="text-[32px] font-bold">Latest Jobs</div>
              <div className="text-xl text-secondary-text-color">
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
            <div className="flex items-center justify-center">
              <Link
                className="text-white bg-theme-color hover:bg-primary-700 outline-none  rounded-lg text-sm font-[600] px-8 py-3 text-center"
                to="login"
              >
                Browse More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[80px] bg-[#F5F5F5]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="px-20">
            <div className="flex flex-col gap-y-10">
              <div className="flex flex-col gap-y-1">
                <div className="text-[32px] font-bold text-text-color">
                  What can I do with Free Jobs?
                </div>
                <div className="text-xl text-secondary-text-color">
                  Streamline your hiring process with strategic channels to
                  reach qualified candidates
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-y-3">
                  <div>
                    <MdOutlineMissedVideoCall className="w-[50px] h-[50px] text-theme-color" />
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <div className="text-xl font-bold">Reduce Hiring bias</div>
                    <div className="text-[16px]">
                      Structured digital interviews increase the predictive
                      validity of your hires by 65%.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-y-3">
                  <div>
                    <CiTimer className="w-[50px] h-[50px] text-theme-color" />
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <div className="font-bold text-xl">Reduce Hiring bias</div>
                    <div className="text-secondary-text-color">
                      Structured digital interviews increase the predictive
                      validity of your hires by 65%.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-y-3">
                  <div>
                    <GrGroup className="w-[50px] h-[50px] text-theme-color" />
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <div className="font-bold text-xl">Reduce Hiring bias</div>
                    <div className="text-secondary-text-color">
                      Structured digital interviews increase the predictive
                      validity of your hires by 65%.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-y-3">
                  <div>
                    <GiArcheryTarget className="w-[50px] h-[50px] text-theme-color" />
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <div className="font-bold text-xl">Reduce Hiring bias</div>
                    <div className="text-secondary-text-color">
                      Structured digital interviews increase the predictive
                      validity of your hires by 65%.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[80px]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col gap-y-12">
            <div className="text-center text-[32px] font-bold text-text-color">
              Get the job {"that's"} right for you
            </div>
            <div className="grid grid-cols-2 rounded-md overflow-hidden">
              <div className="bg-light-blue-color flex items-center pl-16">
                <div className="flex flex-col gap-y-8 max-w-lg">
                  <div className="flex flex-col pl-8 gap-y-3 justify-between items-stretch relative group">
                    <div className="absolute h-full left-0 w-2 rounded-md  bg-gray-300 group-hover:bg-theme-color transition-all duration-300 ease-linear"></div>
                    <div className="text-2xl font-bold">
                      Discover New Opportunities
                    </div>
                    <div className="text-xl text-secondary-text-color">
                      Structured digital interviews increase the predictive
                      validity of your hires by 65%.
                    </div>
                  </div>
                  <div className="flex flex-col pl-8 gap-y-3 justify-between items-stretch relative group">
                    <div className="absolute h-full left-0 w-2 rounded-md  bg-gray-300 group-hover:bg-theme-color transition-all duration-300 ease-linear"></div>
                    <div className="text-2xl font-bold">
                      Get Invited to Apply to jobs
                    </div>
                    <div className="text-xl text-secondary-text-color">
                      Maverick pitch your profile to employers for jobs you’ll
                      love -so you stand out-and these companies can reach out
                      to you directly.
                    </div>
                  </div>
                  <div className="flex flex-col pl-8 gap-y-3 justify-between items-stretch relative group">
                    <div className="absolute h-full left-0 w-2 rounded-md  bg-gray-300 group-hover:bg-theme-color transition-all duration-300 ease-linear"></div>
                    <div className="text-2xl font-bold">
                      Save time with 1-click apply
                    </div>
                    <div className="text-xl text-secondary-text-color">
                      No more filling out lengthy applications! Once Maverick
                      has your key info, you can apply to most jobs with one
                      click.
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute bg-white right-10 top-20 flex flex-col gap-y-2 p-6 text-center rounded-xl">
                  <div className="text-[48px] font-bold leading-normal">
                    1800+
                  </div>
                  <div className="text-secondary-text-color text-lg font-semibold spacing tracking-2">
                    Candidates Applied
                  </div>
                </div>
                <img src={candidate} className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[80px]">
        <div className="flex flex-col gap-y-10">
          <div className="flex justify-center items-center flex-col">
            <div className="flex flex-col gap-y-3 text-center">
              <div className="text-4xl font-bold">
                What our clients are saying
              </div>
              <div className="text-xl text-secondary-text-color">
                Showing companies based on reviews and recent job openings
              </div>
            </div>
          </div>
          <div>
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
            >
              {users.map((x, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="p-10 shadow-testmonialShadow rounded-[40px] flex flex-col gap-y-6">
                      <div className="text-lg">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Eum a doloribus dignissimos. Dolorem, fugit, sint
                        explicabo in, animi minus quidem aperiam neque a eveniet
                        laudantium quia. Doloremque quidem fugiat debitis. Hic
                        debitis veniam perspiciatis! Ipsum harum dolorem
                        tempore. Accusamus facilis quos perspiciatis quaerat at
                        rem reprehenderit neque quibusdam? Rerum dolor ad
                        explicabo at, ut repellendus sapiente necessitatibus
                        nemo asperiores doloribus.
                      </div>
                      <div className="flex gap-x-4 items-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden">
                          <img src={x} className="object-cover w-full h-full" />
                        </div>
                        <div className="flex flex-col gap-y-2">
                          <div>
                            <div className="font-bold text-xl">John Doe</div>
                            <div className="text-theme-color font-[500]">
                              {jobs[i]}
                            </div>
                          </div>
                          <div className="flex gap-x-3">
                            {[1, 2, 3, 4, 5].map((x, i) => {
                              return (
                                <FaStar
                                  key={i}
                                  className="text-yellow-400 font-bold"
                                />
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="pt-[80px]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="px-20">
            <div className="flex justify-between overflow-hidden rounded-md bg-emerald-50">
              <div className="flex flex-col gap-y justify-center max-w-[50%] px-16">
                <div className="flex flex-col gap-y-6">
                  <div className="flex flex-col gap-y-1">
                    <div className="text-[32px] font-bold">Recruting?</div>
                    <div className="text-xl text-secondary-text-color font-semibold">
                      Advertise your jobs to millions of monthly users and
                      search 15.8 million CVs in our database.
                    </div>
                  </div>
                  <div className="flex items-start justify-start">
                    <Link
                      className="text-white bg-theme-color hover:bg-primary-700 outline-none  rounded-lg text-sm font-[600] px-8 py-3 text-center"
                      to="login"
                    >
                      Start Recruiting Now
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <img src={recruting} />
              </div>
            </div>
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

const jobs = [
  "Web develoer",
  "Web designer",
  "Product Manager",
  "Teacher",
  "Content writer",
  "Freelancer",
  "Marketting Specilist",
  "Seo Specialist",
];
