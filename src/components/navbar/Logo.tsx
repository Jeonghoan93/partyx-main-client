import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  return (
    // <img
    //   onClick={() => navigate("/")}
    //   className="hidden md:block cursor-pointer"
    //   src="/images/logo.png"
    //   height="100"
    //   width="100"
    //   alt="Logo"
    // />
    <div
      onClick={() => navigate("/")}
      className={"cursor-pointer font-bold text-xl"}
    >
      Party<span className={"text-red-600"}>X</span>
    </div>
  );
};

export default Logo;
