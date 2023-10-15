import LineContainer from "src/components/LineContainer";
import { Birthday } from "src/interfaces/user";

interface UserVitalProps {
  gender?: string;
  birthday?: Birthday;
  height?: number;
}

const UserVital: React.FC<UserVitalProps> = ({ gender, birthday, height }) => {
  return (
    <LineContainer>
      <section className="flex flex-col items-start gap-3">
        <span className="font-bold">Detail</span>

        <div className="flex flex-col items-start gap-1">
          <span className="font-semibold text-[11pt] text-gray-700">
            {gender}
          </span>
          <div className="flex flex-col items-start">
            <span className="font-semibold text-[11pt] text-gray-700">
              {birthday?.day}/{birthday?.month}/{birthday?.year}
            </span>
            <span className="font-semibold text-[11pt] text-gray-700">
              {height} cm
            </span>
          </div>
        </div>
      </section>
    </LineContainer>
  );
};

export default UserVital;
