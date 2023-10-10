import Container from "src/components/Container";
import { User } from "src/interfaces/user";
import { events } from "src/services/api-examples/events";
import EventSlider from "./Components/EventSlider";

interface CustomizedProps {
  currentUser: User;
}

const Customized: React.FC<CustomizedProps> = ({ currentUser }) => {
  console.log("customised section user:", currentUser);
  return (
    <Container>
      <section className="mt-4">
        <div className="mb-2">
          <h2 className="text-[13pt] font-bold">Hello {currentUser.name}</h2>
          <span className="text-[11pt] text-gray-600 font-semibold">
            These are customized for you
          </span>
        </div>
        <EventSlider events={events} />
      </section>
    </Container>
  );
};

export default Customized;
