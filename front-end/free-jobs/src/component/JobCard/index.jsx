import { CiLocationOn, CiMoneyBill, CiClock1 } from "react-icons/ci";

function JobListing({
  jobTitle,
  company,
  location,
  salary,
  jobType,
  tags,
  companyImage,
}) {
  return (
    <div className="grid grid-rows-[2fr,.5fr] border-[1px] rounded-md hover:border-theme-color hover:shadow-cutomShadow group">
      <div className="grid grid-cols-[2fr,.5fr]">
        <div className="flex items-center p-8 gap-4">
          <div className="h-20 p-4 border-[1px] group-hover:border-theme-color rounded-md">
            <img
              src={companyImage}
              alt="apple icon"
              className="object-cover max-w-full max-h-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <div className="font-bold text-text-color">{jobTitle}</div>
              <div className="text-secondary-text-color">{company}</div>
            </div>
            <div className="flex flex-wrap gap-1">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-blue-100 text-blue-500 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="border-l-[1px] group-hover:border-theme-color px-8 flex justify-center items-center">
          <button className="bg-theme-color py-2 px-4 rounded-md text-white flex justify-center items-center">
            Apply
          </button>
        </div>
      </div>
      <div className="border-t-[1px] group-hover:border-theme-color text-secondary-text-color">
        <div className="flex gap-4 px-4 py-1 items-center">
          <div className="flex gap-2 items-center">
            <div className="text-xl">
              <CiLocationOn />
            </div>
            <div>{location}</div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="text-2xl mt-[2px]">
              <CiMoneyBill />
            </div>
            <div>{salary}</div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="text-xl">
              <CiClock1 />
            </div>
            <div>{jobType}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobListing;
