import { User } from "src/interfaces/user";
import EventSlider from "src/pages/Home/Components/EventSlider";
import { events } from "src/services/api-examples/events";

interface CustomizedSectionProps {
  currentUser: User;
}

const CustomizedSection: React.FC<CustomizedSectionProps> = ({
  currentUser,
}) => {
  console.log("customised section user:", currentUser);
  return (
    <section className="mt-4">
      <div className="mb-2">
        <h2 className="text-[13pt] font-bold">Hello {currentUser.name}</h2>
        <span className="text-[11pt] text-gray-600 font-semibold">
          These are customized for you
        </span>
      </div>
      <EventSlider events={events} />
    </section>
  );
};

export default CustomizedSection;
