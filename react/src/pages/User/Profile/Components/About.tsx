import { AiOutlineFolderOpen } from "react-icons/ai";

const About = () => {
  return (
    <div className="p-5 bg-gray-50 rounded-xl border-[1px] border-neutral-200">
      <section>
        <div className="mb-2">
          <h2 className="text-[13pt] font-bold">About</h2>
        </div>

        <div className="flex flex-col gap-3">
          <div>
            <span className="text-[11pt]">
              Welcome to Intertalents! We're here to help you with your
              Relocation and Talent Acquisition needs. Our mission is to give
              you a competitive edge by bringing the best talent from around the
              world to yo ...
            </span>
            <span className="cursor-pointer text-gray-800 underline">
              see more
            </span>
          </div>
        </div>
      </section>

      <hr className="my-3" />

      <div className="flex items-center justify-center">
        <div className="flex flex-row items-center gap-1">
          <span
            onClick={() => alert("This is all")}
            className="cursor-pointer underline text-[11pt] font-semibold text-gray-600"
          >
            Show all details
          </span>
          <span>
            <AiOutlineFolderOpen />
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
