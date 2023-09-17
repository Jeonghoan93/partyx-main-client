import queryString from "query-string";
import { useLocation } from "react-router-dom";

interface SectionProps {
  name: string;
}

const InvestorSection: React.FC<SectionProps> = ({ name }) => {
  const location = useLocation();
  const params = queryString.parse(location.search);
  const menu = params.menu as string;

  if (menu !== name) {
    return null;
  }

  return (
    <section className="mt-4">
      <div className="mb-2">
        <h2 className="text-[13pt] font-bold">Next unicorn</h2>
        <span className="text-[11pt] text-gray-600 font-semibold">
          How we're going to make it
        </span>
      </div>
      Container comes here
    </section>
  );
};

export default InvestorSection;
