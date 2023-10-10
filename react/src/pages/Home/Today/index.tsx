import { useNavigate } from "react-router-dom";
import Container from "src/components/Container";
import { formatDate } from "src/utils/formatDate";
import { events } from "../../../services/api-examples/events";
import CardSlider from "./Components/CardSlider";

const Today = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <section className="mt-4">
        <div className="mb-2">
          <div className="flex flex-row justify-between items-center">
            <span className="text-[13pt] font-bold">
              {" "}
              {formatDate(new Date(), {
                full: true,
              })}
            </span>
            <span
              onClick={() => navigate("/events")}
              className="cursor-pointer text-[11pt] font-semibold"
            >
              See All
            </span>
          </div>
        </div>
        <CardSlider events={events} />
      </section>
    </Container>
  );
};

export default Today;
