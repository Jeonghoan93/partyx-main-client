import { BsPersonVcard } from "react-icons/bs";
import LineContainer from "src/Components/LineContainer";

const VerifyId = () => {
  return (
    <LineContainer>
      <section className="flex flex-col items-center gap-3">
        <span className="bg-gray-200 rounded-[100%] p-2">
          <BsPersonVcard size={26} />
        </span>

        <div className="flex flex-col gap-1 text-center">
          <span className="text-[12pt] font-bold">Be a trusted member</span>

          <span
            style={{ maxWidth: "260px" }}
            className="text-[11pt] text-gray-800"
          >
            Be part of the verified member and access for more range of parties.
          </span>
        </div>

        <span
          onClick={() => alert("Coming soon!")}
          className="cursor-pointer border-[1pt] text-[10pt] font-semibold text-gray-800 rounded-xl py-2 px-4 border-gray-800"
        >
          Verify me
        </span>
      </section>
    </LineContainer>
  );
};

export default VerifyId;
