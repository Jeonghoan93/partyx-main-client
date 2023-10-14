import Container from "src/components/Container";
import ClubOwner from "./Pages/ClubOwner";
import FestivalOrganizer from "./Pages/FestivalOrganizer";
import RaveOrganizer from "./Pages/RaveOrganizer";

const Partner: React.FC = () => {
  return (
    <Container>
      <div className="mt-10">
        <RaveOrganizer name={"Rave Organizer"} />
        <ClubOwner name={"Club Owner"} />
        <FestivalOrganizer name={"Festival Organizer"} />
      </div>
    </Container>
  );
};

export default Partner;
