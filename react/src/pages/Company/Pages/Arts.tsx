import queryString from "query-string";
import { useLocation } from "react-router-dom";
import TextContainer from "src/components/TextBox/TextContainer";

interface SectionProps {
  name: string;
}

const mockedData = [
  {
    title: "Frontend Developer",
    desc: "Looking for a frontend developer with 3+ years of experience. preferably with React and typescript.",
    user: {
      img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
      name: "Jimmy",
      role: "Developer",
    },
  },
  {
    title: "Backend Developer",
    desc: "Looking for a backend developer with 3+ years of experience. preferably with Node.js and typescript.",
    user: {
      img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
      name: "Jimmy",
      role: "Developer",
    },
  },
  {
    title: "Marketing Manager",
    desc: "Looking for a marketing manager with 3+ years of experience.",
    user: {
      img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
      name: "Jimmy",
      role: "Developer",
    },
  },
  {
    title: "Business Developer",
    desc: "Looking for a business developer with 3+ years of experience.",
    user: {
      img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
      name: "Jimmy",
      role: "Developer",
    },
  },
];

const Arts: React.FC<SectionProps> = ({ name }) => {
  const location = useLocation();
  const params = queryString.parse(location.search);
  const menu = params.menu as string;

  if (menu !== name) {
    return null;
  }

  return (
    <section className="mt-4">
      <div className="mb-2">
        <h2 className="text-[13pt] font-bold">Arts</h2>
        <span className="text-[11pt] text-gray-600 font-semibold">
          We bring value into the hands of artists.
        </span>
      </div>
      {mockedData.map((text, index) => (
        <TextContainer key={index} {...text} />
      ))}
    </section>
  );
};

export default Arts;
