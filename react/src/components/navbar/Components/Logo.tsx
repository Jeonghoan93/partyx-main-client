import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/")}
      className={"cursor-pointer font-extrabold text-[14pt]"}
    >
      PARTYX
    </div>
  );
};

export default Logo;
