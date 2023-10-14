import { AiOutlineAppstoreAdd } from "react-icons/ai";
import LineContainer from "src/components/LineContainer";

const CompleteProfile = () => {
  return (
    <LineContainer>
      <section className="flex flex-col items-center gap-3">
        <span className="bg-gray-200 rounded-[100%] p-2">
          <AiOutlineAppstoreAdd size={26} />
        </span>

        <div className="flex flex-col gap-1 text-center">
          <span className="text-[12pt] font-bold">
            Let people know you better
          </span>

          <span
            style={{ maxWidth: "260px" }}
            className="text-[11pt] text-gray-800"
          >
            Complete profile to have experience more possibility.
          </span>
        </div>

        <span
          onClick={() => alert("Coming soon!")}
          className="cursor-pointer border-[1pt] text-[10pt] font-semibold text-gray-800 rounded-xl py-2 px-4 border-gray-800"
        >
          Complete profile
        </span>
      </section>
    </LineContainer>
  );
};

export default CompleteProfile;
