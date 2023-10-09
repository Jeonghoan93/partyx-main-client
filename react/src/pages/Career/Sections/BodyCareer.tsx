import { useNavigate } from "react-router-dom";
import Container from "src/components/Container";

const BodyCareer = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <Container>
        <div className="py-6 flex flex-col gap-6">
          <span
            style={{ maxWidth: "600px" }}
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

          <span
            onClick={() => navigate("/careers/positions")}
            className="cursor-pointer font-semibold text-[14pt]"
          >
            LEARN MORE
          </span>
        </div>
      </Container>

      <section
        className="w-full h-[40vh] overflow-hidden relative my-3"
        style={{ maxWidth: "600px" }}
      >
        <section className="w-full h-[50vh] overflow-hidden relative">
          <img
            src={"/images/office1.jpg"}
            style={{ width: "100%", height: "100%" }}
            className="object-cover w-full"
            alt="Image"
          />
          <div className={"absolute inset-0 bg-black opacity-30"}></div>{" "}
          {/* This div acts as the overlay */}
        </section>

        <section
          style={{ width: "100%", height: "100%", top: 0, left: 0 }}
          className="absolute object-cover w-full items-center justify-center flex flex-col gap-4 z-1"
        >
          <div className="text-white flex flex-row items-center gap-3 font-bold text-[14pt]">
            <span>Stockholm Office</span>
          </div>
        </section>
      </section>

      <section
        className="w-full h-[40vh] overflow-hidden relative my-3"
        style={{ maxWidth: "600px" }}
      >
        <section className="w-full h-[50vh] overflow-hidden relative">
          <img
            src={"/images/office2.jpg"}
            style={{ width: "100%", height: "100%" }}
            className="object-cover w-full"
            alt="Image"
          />
          <div className={"absolute inset-0 bg-black opacity-30"}></div>{" "}
          {/* This div acts as the overlay */}
        </section>

        <section
          style={{ width: "100%", height: "100%", top: 0, left: 0 }}
          className="absolute object-cover w-full items-center justify-center flex flex-col gap-4 z-1"
        >
          <div className="text-white flex flex-row items-center gap-3 font-bold text-[14pt]">
            <span>Berlin Office</span>
          </div>
        </section>
      </section>

      <section
        className="w-full h-[40vh] overflow-hidden relative my-3"
        style={{ maxWidth: "600px" }}
      >
        <section className="w-full h-[50vh] overflow-hidden relative">
          <img
            src={"/images/office3.jpg"}
            style={{ width: "100%", height: "100%" }}
            className="object-cover w-full"
            alt="Image"
          />
          <div className={"absolute inset-0 bg-black opacity-30"}></div>{" "}
          {/* This div acts as the overlay */}
        </section>

        <section
          style={{ width: "100%", height: "100%", top: 0, left: 0 }}
          className="absolute object-cover w-full items-center justify-center flex flex-col gap-4 z-1"
        >
          <div className="text-white flex flex-row items-center gap-3 font-bold text-[14pt]">
            <span>Oslo Office</span>
          </div>
        </section>
      </section>
    </div>
  );
};

export default BodyCareer;
