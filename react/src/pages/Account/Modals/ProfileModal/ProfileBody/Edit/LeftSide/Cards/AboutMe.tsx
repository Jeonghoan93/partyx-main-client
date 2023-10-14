import LineContainer from "src/Components/LineContainer";

const AboutMe = () => {
  return (
    <LineContainer>
      <div className="pb-3 flex flex-row items-center justify-between">
        <span className="text-[11pt] font-extrabold text-gray-400">
          About me
        </span>

        <span
          onClick={() => alert("Coming soon!")}
          className="cursor-pointer text-[10pt] font-semibold text-blue-700"
        >
          Edit
        </span>
      </div>

      <div className="flex py-1 text-gray-900 text-[11pt] font-semibold">
        <span>Hi, Here is things about me that is not said thru the time.</span>
      </div>
    </LineContainer>
  );
};

export default AboutMe;
