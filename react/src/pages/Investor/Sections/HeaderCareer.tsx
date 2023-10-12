import { useNavigate } from "react-router-dom";

const HeaderCareer = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-gray-50 p-6">
      <div className="flex flex-col gap-6">
        <span
          style={{ maxWidth: "400px" }}
          className="text-[32pt] font-extrabold "
        >
          This might be the one ride of your life
        </span>

        <span
          onClick={() => navigate("/careers/positions")}
          className="cursor-pointer underline text-[13pt] font-semibold"
        >
          Discover all opportunities
        </span>
      </div>
    </div>
  );
};

export default HeaderCareer;
