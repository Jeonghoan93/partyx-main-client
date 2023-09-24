import { Container } from "@mui/material";
import { AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import TextContainer from "src/components/TextBox/TextContainer";

const mockedText1 = {
  title: "why PartyX?",
  desc: "It's about going to parties that matches your vibe, and the people that has similar interests as you. We believe that you can find your best friends in a party, and we want to make it easier for you to find them.",
  user: {
    img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
    name: "Jimmy",
    role: "Developer",
  },
};

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

      <section className="mt-4">
        <div className="mb-4">
          <h2 className="text-[13pt] font-bold">Get together</h2>
          <span className="text-[11pt] text-gray-600 font-semibold">
            Explore parties and make new friends
          </span>
        </div>
        <TextContainer {...mockedText1} />
      </section>
    </Container>
  );
};

export default PersonalInfo;
