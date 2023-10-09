import { Container } from "@mui/material";
import { AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const PersonalInfo: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="flex flex-row items-center gap-2">
        <span
          onClick={() => navigate("/account")}
          className="font-semibold cursor-pointer underline"
        >
          Account
        </span>
        <span>
          <AiOutlineRight size={12} />
        </span>
        <span className="">Personal Info</span>
      </div>

      <section style={{ minHeight: "400px" }} className="mt-4">
        <span>Login to see!</span>
      </section>
    </Container>
  );
};

export default PersonalInfo;
