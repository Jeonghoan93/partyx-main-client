import LineContainer from "src/components/LineContainer";

const About: React.FC = (eventData) => {
  return (
    <LineContainer>
      <section className="flex flex-col items-start gap-3">
        <span className="font-bold">About</span>
        <span className="font-semibold text-[11pt] text-gray-700">
          {eventData?.desc}
        </span>
      </section>
    </LineContainer>
  );
};

export default About;
