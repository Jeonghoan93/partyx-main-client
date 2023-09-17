import queryString from "query-string";
import { useLocation } from "react-router-dom";
import TextContainer from "./TextContainer";

interface SectionProps {
  name: string;
}

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
          Celebration is older than wearing clothes
        </span>
      </div>
      <TextContainer />
    </section>
  );
};

export default AboutSection;
