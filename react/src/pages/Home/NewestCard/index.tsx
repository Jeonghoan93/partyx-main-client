import Container from "src/components/Container";
import Events from "./Components/Events";

const NewestCard = () => {
  return (
    <Container>
      <section className="mt-4 p-1">
        <div className="mb-2">
          <h2 className="text-[13pt] font-bold">Newest in Sweden</h2>
          <span className="text-[11pt] text-gray-600 font-semibold">
            Explore the newest parties in Sweden
          </span>
        </div>
      </section>
      <Events />
    </Container>
  );
};

export default NewestCard;
