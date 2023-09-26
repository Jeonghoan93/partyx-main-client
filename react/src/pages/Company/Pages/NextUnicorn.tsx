import queryString from "query-string";
import { useLocation } from "react-router-dom";
import TextContainer from "src/components/TextBox/TextContainer";

interface SectionProps {
  name: string;
}

const mockedData = [
  {
    title: "Stockholm Beginnings",
    desc: "In the buzzing nightlife of Stockholm, an idea sparks. We offer clubs and festivals an easy ticketing and marketing solution. They love it! Word spreads, and more organizers jump on board. The streets of Stockholm echo with our success.",
    user: {
      img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
      name: "Jimmy",
      role: "Founder",
    },
  },
  {
    title: "The European Adventure",
    desc: "Our fame in Stockholm opens doors to Berlin, London, and Paris. Each city is unique, but our platform flexes and adapts. Clubs and festivals across Europe now have a trusted partner in us. We're not just a platform; we're part of the European nightlife.",
    user: {
      img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
      name: "Jimmy",
      role: "Founder",
    },
  },
  {
    title: "Revolutionizing Party Planning",
    desc: "With our growing reputation, individuals now plan their own events with us. From a rooftop party in Barcelona to a canal-side gathering in Amsterdam, every event is special. We provide tools to make planning a breeze. PartyX becomes synonymous with memorable nights.",
    user: {
      img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
      name: "Jimmy",
      role: "Founder",
    },
  },
  {
    title: "Trusted Everywhere",
    desc: "From that spark in Stockholm to every corner of Europe, we're the heartbeat of the party scene. Organizers trust us, attendees love us. Every event, big or small, shines a little brighter with us by its side.",
    user: {
      img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
      name: "Jimmy",
      role: "Founder",
    },
  },
];

const NextUnicorn: React.FC<SectionProps> = ({ name }) => {
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
          How we're going to make it.
        </span>
      </div>
      {mockedData.map((data, index) => (
        <TextContainer key={index} {...data} />
      ))}
    </section>
  );
};

export default NextUnicorn;
