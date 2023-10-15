import { useNavigate } from "react-router-dom";
import Container from "src/components/Container";

const BodyCareer = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="flex flex-col gap-6 py-4">
        <span
          style={{ maxWidth: "400px" }}
          className="text-[24pt] font-extrabold"
        >
          WE ARE GOING TO MAKE PARTY EVERYDAY EVERYWHERE
        </span>

        <span
          onClick={() => navigate("/investor/business-plan")}
          className="cursor-pointer font-semibold text-[14pt] underline"
        >
          LEARN MORE
        </span>
      </div>
    </Container>
  );
};

export default BodyCareer;
