import Container from "src/components/Container";

const HeaderCareer = () => {
  return (
    <div className="bg-black text-gray-50">
      <Container>
        <div className="py-6 flex flex-col gap-6">
          <span
            style={{ maxWidth: "400px" }}
            className="text-[32pt] font-extrabold "
          >
            This might be the one ride of your life
          </span>

          <div className="flex flex-col">
            <span className="text-[20pt]">TEAM</span>
            <div className="flex flex-row gap-2 items-center">
              <span className="text-[20pt]">LOCATION</span>
              <span className="cursor-pointer">SEARCH</span>
            </div>
          </div>

          <span className="cursor-pointer">Browse all open positions</span>
        </div>
      </Container>
    </div>
  );
};

export default HeaderCareer;
