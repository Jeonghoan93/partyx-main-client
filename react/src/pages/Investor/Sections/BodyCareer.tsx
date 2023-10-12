import { useNavigate } from "react-router-dom";

const BodyCareer = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white flex p-6">
      <div className="flex flex-col gap-6">
        <span
          style={{ maxWidth: "400px" }}
          className="text-[24pt] font-extrabold "
        >
          WE ARE GOING TO MAKE PARTY EVERYDAY EVERYWHERE
        </span>

        <span className="text-[12pt]">
          Everyone at PartyX has an important part to play. What’s yours going
          to be?
        </span>

        <span
          onClick={() => navigate("/careers/positions")}
          className="cursor-pointer font-semibold text-[14pt] underline"
        >
          LEARN MORE
        </span>
      </div>
    </div>
  );
};

export default BodyCareer;
