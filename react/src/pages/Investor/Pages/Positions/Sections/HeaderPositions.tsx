import { jobList } from "../Constants/jobList";

const HeaderPositions = () => {
  return (
    <div className="bg-black text-gray-50 p-6 flex flex-col items-center">
      <div style={{ maxWidth: "400px" }} className="text-center">
        <span className="font-semibold text-[25pt]">
          {jobList.length} Jobs across all teams and all locations
        </span>
      </div>
    </div>
  );
};

export default HeaderPositions;
