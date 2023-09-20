import Container from "src/components/Container";
import AboutSection from "./Components/AboutSection";
import InvestorSection from "./Components/InvestorSection";
import OfferSection from "./Components/OfferSection";

const EnterprisePage: React.FC = () => {
  return (
    <Container>
      <div className="mt-10">
        <AboutSection name={"About us"} />
        <OfferSection name={"Our offers"} />
        <InvestorSection name={"Investor relations"} />
      </div>
    </Container>
  );
};

export default EnterprisePage;
