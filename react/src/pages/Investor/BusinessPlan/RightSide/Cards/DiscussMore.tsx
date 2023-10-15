import { AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import Button from "src/components/Button";
import LineContainer from "src/components/LineContainer";

const DiscussMore = () => {
  return (
    <LineContainer>
      <div className="text-[14pt] flex flex-row items-center gap-1 mb-3">
        <span className="text-[13pt] text-neutral-500 font-bold">
          Wanna discuss more?
        </span>
      </div>

      <section className="flex flex-col gap-4 items-center">
        <div className="w-full">
          <Button
            disabled={false}
            label="Send email to Jimmy"
            onClick={() => alert("zldwkd93.business@gmail.com")}
          />
        </div>

        <Link to={"https://www.linkedin.com/in/jimmy-h-199814242/"}>
          <div className="flex flex-row items-center gap-1 cursor-pointer px-1 py-2 relative text-center">
            <span className="text-[11pt] underline text-neutral-800 font-semibold">
              or Contact thru Linkedin{" "}
            </span>
            <span>
              <AiOutlineLinkedin />
            </span>
          </div>
        </Link>
      </section>
    </LineContainer>
  );
};

export default DiscussMore;
