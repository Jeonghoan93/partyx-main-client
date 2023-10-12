import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

const BodyPositions = () => {
  const [showRemote, setShowRemote] = useState(false);

  return (
    <div className="bg-gray-100 z-0 py-10 px-5 flex flex-col items-center">
      {/* Input Fields */}
      <div className="flex flex-col lg:flex-row gap-4 w-full lg:max-w-3xl">
        {/* Job Titles */}
        <div className="w-full lg:w-1/3">
          <input
            type="text"
            id="jobTitle"
            placeholder="Title"
            className="w-full px-6 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        {/* Job Category */}
        <div className="relative w-full lg:w-1/3">
          <input
            type="text"
            id="locations"
            placeholder="Department"
            className="w-full px-6 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 pl-6"
          />
          <span className="absolute cursor-pointer inset-y-0 right-6 flex items-center">
            <AiOutlineDown />
          </span>
        </div>

        {/* All Locations */}
        <div className="relative w-full lg:w-1/3">
          <input
            type="text"
            id="locations"
            placeholder="Location"
            className="w-full px-6 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 pl-6"
          />
          <span className="absolute cursor-pointer inset-y-0 right-6 flex items-center">
            <AiOutlineDown />
          </span>
        </div>
      </div>

      {/* Toggle Switch */}
      <div className="flex items-center mt-6 w-full lg:max-w-3xl">
        <span className="text-lg font-semibold mr-3">
          Show Only Remote Jobs
        </span>
        <div
          className={`relative inline-block w-10 align-middle select-none transition duration-200 ease-in ${
            showRemote ? "bg-blue-400" : "bg-gray-400"
          } rounded-xl cursor-pointer`}
          onClick={() => setShowRemote(!showRemote)}
        >
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            checked={showRemote}
            onChange={() => setShowRemote(!showRemote)}
            className="opacity-0 w-0 h-0"
          />
          <div
            className={`toggle-dot absolute top-0.5 left-0.5 transform-gpu ${
              showRemote ? "translate-x-4" : ""
            } transition-transform duration-300 ease-in-out w-5 h-5 bg-gray-200 border-2 rounded-full`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BodyPositions;
