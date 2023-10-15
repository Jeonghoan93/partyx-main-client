import { useParams } from "react-router-dom";
import Container from "src/components/Container";
import EmptyState from "src/components/EmptyState";
import { User } from "src/interfaces/user";
import LeftSide from "src/pages/Profile/LeftSide";
import RightSide from "src/pages/Profile/RightSide";
import { users } from "src/services/api-examples/user";

const Profile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();

  const userData = users.find((user: User) => user.userId === Number(userId));

  if (!userData) {
    return <EmptyState />;
  }

  return (
    <Container>
      <div
        className="
          pb-10
          max-w-screen-xl 
          mx-auto
        "
      >
        <div className="flex flex-col gap-4">
          <div
            className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-3 
            "
          >
            <LeftSide user={userData} />
            <div
              className="
                md:order-last 
                md:col-span-3
              "
            >
              <RightSide />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
