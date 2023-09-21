import Container from "src/components/Container";
import Careers from "./Pages/Careers";
import Investors from "./Pages/Investors";
import Mission from "./Pages/Mission";

const EnterprisePage: React.FC = () => {
  return (
    <Container>
      <div className="mt-10">
        <Mission name={"Mission"} />
        <Careers name={"Careers"} />
        <Investors name={"Investors"} />
      </div>
    </Container>
  );
};

export default EnterprisePage;
