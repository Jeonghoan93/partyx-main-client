import queryString from "query-string";
import { useLocation } from "react-router-dom";
import TextContainer from "src/components/TextBox/TextContainer";

interface SectionProps {
  name: string;
}

const mockedData = [
  {
    title: "Tune Into Everywhere in Europe",
    desc: "Our journey began here in Europe, harmonizing with the pulse of its festivals. We streamlined ticketing, amped up marketing, and hit every note right. The festival buzz went viral.",
    user: {
      img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
      name: "Jimmy",
      role: "Your partner",
    },
  },
  {
    title: "Europe Grooves with Us",
    desc: "From Berlin's techno beats to London's eclectic mix, we became the rhythm uniting Europe's festivals. As we expanded, every city added its unique melody to our symphony. We're not just a platform; we're the crescendo of European festivity.",
    user: {
      img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
      name: "Jimmy",
      role: "Your partner",
    },
  },
  {
    title: "The Beat Goes On",
    desc: "Our rhythm resonates beyond festivals. Intimate gatherings, grand celebrations, and all that jazz in between, we make organizing a breeze. Every event feels like a headliner with PartyX.",
    user: {
      img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
      name: "Jimmy",
      role: "Your partner",
    },
  },
  {
    title: "Europe's Festive Pulse",
    desc: "We're the rhythm, the vibe, the heart of Europe's festival scene. With PartyX, every festival turns legendary, every beat echoes across borders.",
    user: {
      img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
      name: "Jimmy",
      role: "Your partner",
    },
  },
];

const FestivalOrganizer: React.FC<SectionProps> = ({ name }) => {
  const location = useLocation();
  const params = queryString.parse(location.search);
  const menu = params.menu as string;

  if (menu !== name) {
    return null;
  }

  return (
    <section className="mt-4">
      <div className="mb-2">
        <h2 className="text-[13pt] font-bold">The Euro Beat</h2>
        <span className="text-[11pt] text-gray-600 font-semibold">
          Where Every Festival, Resounds Across Borders.
        </span>
      </div>
      {mockedData.map((data, index) => (
        <TextContainer key={index} {...data} />
      ))}
    </section>
  );
};

export default FestivalOrganizer;
