import LineContainer from "src/components/LineContainer";

const AboutMe = () => {
  return (
    <LineContainer>
      <div className="pb-3">
        <span className="text-[11pt] font-extrabold text-gray-400">
          About me
        </span>
      </div>

      <div className="flex py-1 text-gray-900 text-[11pt] font-semibold">
        <span>Hi, Here is things about me that is not said thru the time.</span>
      </div>
    </LineContainer>
  );
};

export default AboutMe;
