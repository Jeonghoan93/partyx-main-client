import { useNavigate } from "react-router-dom";
import LineContainer from "src/components/LineContainer";
import SmallUserCard from "src/components/SmallUserCard";
import { users } from "src/services/api-examples/user";

const DateTeam = () => {
  const navigate = useNavigate();

  return (
    <LineContainer>
      <section className="flex flex-col gap-3">
        <div className="my-2">
          <h2 className="text-[13pt] font-bold mb-2">Date & Team</h2>
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
          <span className="text-[11pt] text-gray-600 font-semibold">
            Here are the team members
          </span>

          <div className="flex flex-row gap-1 items-start pt-3">
            {users.slice(0, 5).map((user) => (
              <SmallUserCard
                onClick={() => navigate(`/profile/${user.userId}`)}
                img={user.img}
                name={user.firstName}
                role={user.role}
              />
            ))}
          </div>
        </div>
      </section>
    </LineContainer>
  );
};

export default DateTeam;
