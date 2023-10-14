import queryString from "query-string";
import { useLocation } from "react-router-dom";
import TextContainer from "../../../components/TextBox/TextContainer";

interface SectionProps {
  name: string;
}

const mockedData = [
  {
    title: "intoxicate the mix of energy",
    desc: "Community, and a shared love for the rhythm of the night. Raves are about more than just music — they're about a collective experience, an escape from the mundane, and an immersive journey into sound and connection.",
    user: {
      img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
      name: "Jimmy",
      role: "Nightcrawler",
    },
  },
  {
    title: "Beats that Bind",
    desc: "Behind the decks and the dance floor, lies a narrative of unity. Every drop, every transition, is a chance to connect, to be part of a larger collective that beats as one.",
    user: {
      img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
      name: "Jimmy",
      role: "Nightcrawler",
    },
  },
  {
    title: "Beyond the Music",
    desc: "Raves are more than just events. They're ephemeral worlds where boundaries blur, friendships form, and memories are etched in light and sound. We're here to amplify this magic.",
    user: {
      img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
      name: "Jimmy",
      role: "Nightcrawler",
    },
  },
  {
    title: "The Pulse of the Party Scene",
    desc: "With every rave we organize, we aim to elevate the party landscape. Crafting experiences, fostering communities, and igniting nights that echo into eternity.",
    user: {
      img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
      name: "Jimmy",
      role: "Nightcrawler",
    },
  },
];

const RaveOrganizer: React.FC<SectionProps> = ({ name }) => {
  const location = useLocation();
  const params = queryString.parse(location.search);
  const menu = params.menu as string;

  if (menu !== name) {
    return null;
  }

  return (
    <section className="mt-4">
      <div className="mb-4">
        <h2 className="text-[13pt] font-bold">Spread your love</h2>
        <span className="text-[11pt] text-gray-600 font-semibold">
          Plan your next rave, we will the rest.
        </span>
      </div>
      {mockedData.map((text, index) => (
        <TextContainer key={index} {...text} />
      ))}
    </section>
  );
};

export default RaveOrganizer;
