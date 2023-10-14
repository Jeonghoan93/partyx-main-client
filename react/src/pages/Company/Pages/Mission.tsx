import queryString from "query-string";
import { useLocation } from "react-router-dom";
import TextContainer from "../../../components/TextBox/TextContainer";

interface SectionProps {
  name: string;
}

const mockedData = [
  {
    title: "A Dream Born from Travels",
    desc: "14 years, countless destinations, endless parties. From beach bonfires in Thailand to rooftop soirees in Morocco, my travels taught me one thing: people crave connections. My time managing a party hostel in France was the last piece of the puzzle. I knew I had to create something special.",
    user: {
      img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
      name: "Jimmy",
      role: "Dreamer",
    },
  },
  {
    title: "Every Party Tells a Story",
    desc: "Behind every event, there's a story waiting to unfold. Whether it's a graduation party in Madrid or a post-concert gathering in Dublin, we believe in curating experiences that resonate, creating memories that last forever.",
    user: {
      img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
      name: "Jimmy",
      role: "Dreamer",
    },
  },
  {
    title: "More than Just Parties",
    desc: "It's about creating a sense of community. We're in the business of bridging gaps, of making strangers into friends, of lighting up evenings with laughter and dance. Every host and every guest adds to this beautiful tapestry we're weaving.",
    user: {
      img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
      name: "Jimmy",
      role: "Dreamer",
    },
  },
  {
    title: "The Future of Social Gatherings",
    desc: "We envision a world where any party, no matter how big or small, can be discovered and enjoyed by like-minded souls. Our mission is to make this dream a reality, one event at a time.",
    user: {
      img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
      name: "Jimmy",
      role: "Dreamer",
    },
  },
];

const Mission: React.FC<SectionProps> = ({ name }) => {
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
          Explore parties and make new friends.
        </span>
      </div>
      {mockedData.map((text, index) => (
        <TextContainer key={index} {...text} />
      ))}
    </section>
  );
};

export default Mission;
