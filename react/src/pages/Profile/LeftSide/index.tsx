import { User } from "src/interfaces/user";
import About from "./Components/About";
import Location from "./Components/Location";
import UserPhoto from "./Components/UserPhoto";
import UserVital from "./Components/UserVital";

interface LeftSideProps {
  user: User;
}

const LeftSide: React.FC<LeftSideProps> = ({ user }) => {
  return (
    <div className="flex flex-col gap-3 col-span-4 mb-3">
      <UserPhoto img={user.img} />
      <About desc={user.desc} />
      <UserVital
        gender={user.gender}
        birthday={user.birthday}
        height={user.height}
      />
      <Location firstName={user.firstName} address={user.address} />
    </div>
  );
};

export default LeftSide;
