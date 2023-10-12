import { useNavigate } from "react-router-dom";

const FriendsList = () => {
  const navigate = useNavigate();

  return (
    <div className="p-5 bg-gray-50 rounded-lg shadow border-[1px] border-neutral-200">
      <section className="flex flex-col gap-3">
        <div className="mb-2">
          <h2 className="text-[13pt] font-bold mb-2">Friends</h2>
          <div className="flex flex-row justify-between items-center">
            <div
              onClick={() => navigate("/profile/jimmy")}
              className="cursor-pointer flex flex-row items-center gap-2"
            >
              {/* host photo */}
              <div className="p-1">
                <img
                  className="rounded-full"
                  height="40"
                  width="40"
                  alt="Avatar"
                  src={
                    "https://media.licdn.com/dms/image/D4D03AQGIxd-BionXWQ/profile-displayphoto-shrink_800_800/0/1683486219744?e=1701302400&v=beta&t=iibgoRdGza1rALmAZhHlOm4SCme1chE4xsTtYnLT79g"
                  }
                />
              </div>

              {/* host name and role */}
              <div className="flex flex-col">
                <span className="text-[11pt] text-gray-900 font-semibold">
                  Jimmy
                </span>
                <span className="text-[9pt] text-gray-500">
                  Met at a conference
                </span>
              </div>
            </div>

            <div
              onClick={() => alert("Please contact thru Linkedin")}
              className="cursor-pointer py-1 px-2 border-[1px] rounded-md border-neutral-400"
            >
              <span className="text-[10pt] font-semibold">Message</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FriendsList;
