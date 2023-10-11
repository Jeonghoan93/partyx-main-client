import { BiBookContent } from "react-icons/bi";

const About = () => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow border-[1px] border-neutral-200">
      <div
        onClick={() => alert("Not yet")}
        className="flex flex-row items-center gap-3 cursor-pointer"
      >
        <span>
          <BiBookContent size={28} />
        </span>
        <div className="flex flex-col gap-1">
          <span className="text-[12pt] font-bold">What works</span>
          <span className="text-[9pt] font-semibold text-gray-700">
            Learn more about what works and what doesn't.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
