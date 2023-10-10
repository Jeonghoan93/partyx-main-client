import Container from "src/components/Container";
import { events } from "src/services/api-examples/events";
import CardSlider from "./Components/CardSlider";

const Suggestions = () => {
  return (
    <Container>
      <section className="mb-5">
        <h2 className="text-[13pt] font-bold">Suggestions</h2>

        <div className="flex flex-col gap-2">
          <CardSlider events={events} />
        </div>
      </section>
    </Container>
  );
};

export default Suggestions;
