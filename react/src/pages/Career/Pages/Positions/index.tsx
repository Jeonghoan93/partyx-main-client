import JobList from "./Components/JobLists";
import { jobList } from "./Constants/jobList";
import BodyPositions from "./Sections/BodyPositions";
import HeaderPositions from "./Sections/HeaderPositions";

const Positions = () => {
  return (
    <>
      <HeaderPositions />
      <BodyPositions />
      <JobList jobs={jobList} />
    </>
  );
};

export default Positions;
