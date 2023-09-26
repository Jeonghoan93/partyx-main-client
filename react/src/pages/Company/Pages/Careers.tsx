import Container from "src/components/Container";
import TextContainer from "src/components/TextBox/TextContainer";

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

const Careers: React.FC = () => {
  return (
    <Container>
      <section className="flex flex-col gap-2">
        <div className="mb-2">
          <h2 className="text-[13pt] font-bold">Careers</h2>
          <span className="text-[11pt] text-gray-600 font-semibold">
            We bring value into the hands of artists.
          </span>
        </div>

        <section className="lg:grid lg:grid-cols-3 lg:gap-3">
          {mockedData.map((text, index) => (
            <TextContainer key={index} {...text} />
          ))}
        </section>
      </section>
    </Container>
  );
};

export default Careers;
