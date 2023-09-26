import queryString from "query-string";
import { useLocation } from "react-router-dom";
import TextContainer from "src/components/TextBox/TextContainer";

interface SectionProps {
  name: string;
}

const mockedData = [
  {
    title: "Attract More Guests, Every Night",
    desc: "Empty dance floors? Not with Party X. We'll get your club buzzing with a crowd, every night. Leave the marketing to us, and just watch as guests line up at your door.",
    user: {
      img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
      name: "Jimmy",
      role: "Your partner",
    },
  },
  {
    title: "Effortless Ticketing, More Revenue",
    desc: "Forget about messy cash transactions or no-shows. With our advanced payment solutions, we ensure you sell tickets in advance and maximize your revenue. We've got your back.",
    user: {
      img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
      name: "Jimmy",
      role: "Your partner",
    },
  },
  {
    title: "You Focus on the Party, We Handle the Rest",
    desc: "Between music, staff, and ambience, you have enough on your plate. Leave the promotion, ticketing, and guest handling to us. You do what you do best, and we'll handle the rest.",
    user: {
      img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
      name: "Jimmy",
      role: "Your partner",
    },
  },
  {
    title: "Join a Community, Not Just a Platform",
    desc: "By joining Party X, you're not just getting a service, you're joining a community of clubs and event organizers. Share experiences, learn from others, and grow your network.",
    user: {
      img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
      name: "Jimmy",
      role: "Your partner",
    },
  },
];

const ClubOwner: React.FC<SectionProps> = ({ name }) => {
  const location = useLocation();
  const params = queryString.parse(location.search);
  const menu = params.menu as string;

  if (menu !== name) {
    return null;
  }

  return (
    <section className="mt-4">
      <div className="mb-2">
        <h2 className="text-[13pt] font-bold">Elevate Your Nights</h2>
        <span className="text-[11pt] text-gray-600 font-semibold">
          Maximized Profits, Effortless Management.
        </span>
      </div>
      {mockedData.map((text, index) => (
        <TextContainer key={index} {...text} />
      ))}
    </section>
  );
};

export default ClubOwner;
