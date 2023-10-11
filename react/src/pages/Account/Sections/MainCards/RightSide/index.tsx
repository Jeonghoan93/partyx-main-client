import { AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import Button from "src/components/Button";

const RightSide: React.FC = () => {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 bg-gray-50 rounded-xl border-[1px] border-neutral-200 overflow-hidden p-6">
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
      </div>

      <div className="p-5 bg-gray-50 rounded-xl border-[1px] border-neutral-200">
        <section className="flex flex-col gap-3">
          <div className="my-2">
            <h2 className="text-[13pt] font-bold mb-2">Date</h2>
            <span className="text-[11pt] text-gray-600 font-semibold">
              Not yet planned
            </span>

            <div
              onClick={() => alert("Please contact thru Linkedin")}
              className="flex flex-col mt-3"
            >
              <span className="text-[12pt] underline cursor-pointer">
                See more detail
              </span>
            </div>
          </div>

          <hr />

          <div className="my-2">
            <h2 className="text-[13pt] font-bold mb-2">Team</h2>
            <span className="text-[11pt] text-gray-600 font-semibold">
              Here are the team members
            </span>

            <div className="flex flex-row items-center mt-3">
              <span>
                <img
                  className="rounded-full"
                  height="40"
                  width="40"
                  alt="Avatar"
                  src={
                    "https://media.licdn.com/dms/image/D4D03AQGIxd-BionXWQ/profile-displayphoto-shrink_800_800/0/1683486219744?e=1701302400&v=beta&t=iibgoRdGza1rALmAZhHlOm4SCme1chE4xsTtYnLT79g"
                  }
                />
              </span>

              <span>
                <img
                  className="rounded-full"
                  height="40"
                  width="40"
                  alt="Avatar"
                  src={"https://i.pravatar.cc/150"}
                />
              </span>

              <span>
                <img
                  className="rounded-full"
                  height="40"
                  width="40"
                  alt="Avatar"
                  src={"https://i.pravatar.cc/151"}
                />
              </span>

              <span>
                <img
                  className="rounded-full"
                  height="40"
                  width="40"
                  alt="Avatar"
                  src={"https://i.pravatar.cc/152"}
                />
              </span>

              <span>
                <img
                  className="rounded-full"
                  height="40"
                  width="40"
                  alt="Avatar"
                  src={"https://i.pravatar.cc/153"}
                />
              </span>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default RightSide;
