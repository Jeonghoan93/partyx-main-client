import Container from "src/Components/Container";

import Arts from "./Pages/Arts";
import Mission from "./Pages/Mission";
import NextUnicorn from "./Pages/NextUnicorn";

const EnterprisePage: React.FC = () => {
  return (
    <Container>
      <div className="mt-20">
        <Mission name={"Mission"} />
        <Arts name={"Arts"} />
        <NextUnicorn name={"Next Unicorn"} />
      </div>
    </Container>
  );
};

export default EnterprisePage;
