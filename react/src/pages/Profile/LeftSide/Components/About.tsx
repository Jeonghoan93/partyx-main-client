import LineContainer from "src/components/LineContainer";

interface AboutProps {
  desc: string;
}

const About: React.FC<AboutProps> = ({ desc }) => {
  return (
    <LineContainer>
      <section className="flex flex-col items-start gap-3">
        <span className="font-bold">About</span>
        <span className="font-semibold text-[11pt] text-gray-700">{desc}</span>
      </section>
    </LineContainer>
  );
};

export default About;
