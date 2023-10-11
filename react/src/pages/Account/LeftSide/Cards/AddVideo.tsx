import { BiVideoPlus } from "react-icons/bi";

const AddVideo = () => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg border-[1px] border-neutral-200 shadow">
      <section className="flex flex-col items-center gap-3">
        <span className="bg-gray-200 rounded-[100%] p-2">
          <BiVideoPlus size={26} />
        </span>

        <div className="flex flex-col gap-1 text-center">
          <span className="text-[12pt] font-bold">Come to life with video</span>

          <span
            style={{ maxWidth: "260px" }}
            className="text-[11pt] text-gray-800"
          >
            Adding a video to your profile shows your personality in action.
          </span>
        </div>

        <span
          onClick={() => alert("Coming soon!")}
          className="cursor-pointer border-[1pt] text-[10pt] font-semibold text-gray-800 rounded-xl py-2 px-4 border-gray-800"
        >
          Add a Video Prompt
        </span>
      </section>
    </div>
  );
};

export default AddVideo;
