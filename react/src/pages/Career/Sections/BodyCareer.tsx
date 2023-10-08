import Container from "src/components/Container";

const BodyCareer = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="py-6 flex flex-col gap-6">
          <span
            style={{ maxWidth: "400px" }}
            className="text-[24pt] font-extrabold "
          >
            WE ARE PASSIONATE ABOUT PARTY EVERYDAY EVERYWHERE
          </span>

          <div className="flex flex-col gap-3 text-gray-800">
            <span className="text-[16pt]">
              We are passionate about making every city we enter super fun.
            </span>

            <span className="text-[12pt]">
              Everyone at PartyX has an important part to play. What’s yours
              going to be?
            </span>
          </div>

          <span className="cursor-pointer font-semibold text-[14pt]">
            LEARN MORE
          </span>
        </div>
      </Container>
    </div>
  );
};

export default BodyCareer;
