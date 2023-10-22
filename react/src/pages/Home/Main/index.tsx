import Container from "src/components/Container";
import FindTechno from "./Cards/FindTechno";
import ListParty from "./Cards/ListParty";

const Main = () => {
  return (
    <Container>
      <div className="pt-[20px] flex flex-col gap-4">
        <div
          className="
              grid 
              grid-cols-1 
              md:grid-cols-3 
              md:gap-3 
            "
        >
          <section className="w-full h-[50vh] overflow-hidden relative mb-3 border-neutral-50 border-[1px] rounded-lg shadow">
            <section className="w-full h-[50vh] overflow-hidden relative">
              <div className={"absolute inset-0 bg-gray-50 opacity-50"}></div>{" "}
              {/* This div acts as the overlay */}
            </section>

            <section
              style={{ width: "100%", height: "100%", top: 0, left: 0 }}
              className="absolute object-cover w-full items-center justify-center flex flex-col gap-4 z-1"
            >
              <ListParty />
            </section>
          </section>
          <div
            className="
                md:order-last 
                md:col-span-2
              "
          >
            <FindTechno />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Main;
