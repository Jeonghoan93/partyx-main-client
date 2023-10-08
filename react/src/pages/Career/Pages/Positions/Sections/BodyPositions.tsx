import { useState } from "react";

const BodyPositions = () => {
  const [showRemote, setShowRemote] = useState(false);

  return (
    <div className="bg-gray-100 py-10 px-5 flex flex-col items-center">
      {/* Input Fields */}

      <div className="flex flex-col gap-4">
        {/* Search Job Titles */}
        <div className="w-full" style={{ width: "400px" }}>
          <input
            type="text"
            id="jobTitle"
            placeholder="Search job titles"
            className="w-full px-6 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        {/* All Teams */}
        <div className="w-full" style={{ width: "400px" }}>
          <input
            type="text"
            id="teams"
            placeholder="Search teams"
            className="w-full px-6 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        {/* All Locations */}
        <div className="w-full" style={{ width: "400px" }}>
          <input
            type="text"
            id="locations"
            placeholder="Search locations"
            className="w-full px-6 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center mt-6">
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
    </div>
  );
};

export default BodyPositions;
