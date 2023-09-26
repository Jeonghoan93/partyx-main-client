import { AiOutlineDown } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import { User } from "src/interfaces/user";

interface HostMenuProps {
  currentUser: User;
}

const HostMenu: React.FC<HostMenuProps> = ({ currentUser }) => {
  return (
    <section className="flex flex-row-reverse items-center">
      <div className="flex flex-row items-center gap-10">
        <div className="cursor-pointer">
          <span>
            <GrNotification size={16} />
          </span>
        </div>

        <div className="flex flex-row items-center gap-2 cursor-pointer">
          <span>{currentUser.name}</span>
          <span className="mt-1/2">
            <AiOutlineDown size={16} />
          </span>
        </div>
      </div>
    </section>
  );
};

export default HostMenu;
