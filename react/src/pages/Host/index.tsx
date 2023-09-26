import { MockedUser } from "src/services/api-examples/user";
import AccountSection from "./Sections/AccountSection";
import HostMenu from "./Sections/HostMenu";
import TransactionSection from "./Sections/TransactionSection";

const Host: React.FC = () => {
  // const currentUser = useCurrentUser();
  const currentUser = MockedUser;

  return (
    <div className="p-10" style={{ marginLeft: "170px" }}>
      <HostMenu currentUser={currentUser} />
      <AccountSection />
      <TransactionSection />
    </div>
  );
};

export default Host;
