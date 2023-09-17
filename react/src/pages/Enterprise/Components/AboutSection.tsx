import queryString from "query-string";
import { useLocation } from "react-router-dom";
import TextContainer from "./TextContainer";

interface SectionProps {
  name: string;
}

const mockedText1 = {
  title: "So, why PartyX?",
  desc: "Well, It's about going to parties that matches your vibe, and the people that has similar interests as you. We believe that you can find your best friends in a party, and we want to make it easier for you to find them.",
  user: {
    img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
    name: "Jimmy",
    role: "Founder",
  },
};

const AboutSection: React.FC<SectionProps> = ({ name }) => {
  const location = useLocation();
  const params = queryString.parse(location.search);
  const menu = params.menu as string;

  if (menu !== name) {
    return null;
  }

  return (
    <section className="mt-4">
      <div className="mb-4">
        <h2 className="text-[13pt] font-bold">Get together</h2>
        <span className="text-[11pt] text-gray-600 font-semibold">
          Explore parties and make new friends
        </span>
      </div>
      <TextContainer {...mockedText1} />
    </section>
  );
};

export default AboutSection;
