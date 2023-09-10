import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/")}
      className={"cursor-pointer font-bold text-xl hidden md:block"}
    >
      PARTY<span className={"text-red-600"}>X</span>
    </div>
  );
};

export default Logo;
