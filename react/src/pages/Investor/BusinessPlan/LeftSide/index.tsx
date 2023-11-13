import InfoCard from "src/components/TextBox/InfoCard";
import {
  EarningMechanism,
  ExpansionIdeas,
  InfoTexts,
  InfoTexts2,
  MonetizationStrategies,
  SafetyTrust,
} from "../Constants";
import FundingPlan from "./Cards/FundingPlan";
import VisionCard from "./Cards/VisionCard";
import LocationCard from "./Cards/LocationCard";

const LeftSide: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 col-span-4 mb-3">
      <VisionCard />
      <FundingPlan />
      <LocationCard />

      <InfoCard title={"FAQ"} infoTexts={InfoTexts} />
      <InfoCard
        title={"Core Features & Functionality"}
        infoTexts={InfoTexts2}
      />
      <InfoCard title={"Safety & Trust"} infoTexts={SafetyTrust} />
      <InfoCard title={"Earning Mechanisms"} infoTexts={EarningMechanism} />
      <InfoCard
        title={"Monetization Strategies"}
        infoTexts={MonetizationStrategies}
      />
      <InfoCard title={"Expansion Ideas"} infoTexts={ExpansionIdeas} />
    </div>
  );
};

export default LeftSide;
