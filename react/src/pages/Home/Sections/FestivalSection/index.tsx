import festivals from "../../../../services/api-examples/festivals";
import FestivalSlider from "./Components/FestivalSlider";

const FestivalSection = () => {
  return (
    <section className="mt-4 p-1">
      <div className="mb-2">
        <h2 className="text-[13pt] font-bold">Hottest Festivals</h2>
        <span className="text-[11pt] text-gray-600 font-semibold">
          Wait for the best festivals in Europe
        </span>
      </div>
      <FestivalSlider festivals={festivals} />
    </section>
  );
};

export default FestivalSection;
