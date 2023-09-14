import Container from "src/components/Container";
import festivals from "../api-examples/festivals";
import FestivalSlider from "./Components/FestivalSlider";

const FestivalCard = () => {
  return (
    <Container>
      <section className="mt-4 p-2">
        <div className="mb-2">
          <h2 className="text-[13pt] font-bold">Hottest Festivals</h2>
          <span className="text-[11pt] text-gray-600 font-semibold">
            Wait for the best festivals in Europe
          </span>
        </div>
        <FestivalSlider festivals={festivals} />
      </section>
    </Container>
  );
};

export default FestivalCard;
