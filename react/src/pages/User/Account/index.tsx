import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "src/components/Container";
import { User } from "src/interfaces/user";
import { getCurrentUser } from "src/services/auth";
import getAccountItems from "./Components/AccountItems";
import { LinkBox } from "./Components/LinkBox";

const Account: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const accountItems = getAccountItems(navigate);

  useEffect(() => {
    async function fetchCurrentUser() {
      const user = await getCurrentUser();
      setCurrentUser(user);
    }

    fetchCurrentUser();
  }, []);

  return (
    <Container>
      <section className="px-3">
        <div className="mb-4">
          <h2 className="text-[18pt] font-bold mb-1">Account</h2>
          <div className="flex flex-row gap-1 text-[12pt] text-gray-600 font-normal">
            <span className="font-bold">{currentUser?.name}</span>·
            <span>{currentUser?.email}</span>·
            <span className="underline cursor-pointer font-semibold">
              Go to profile
            </span>
          </div>
        </div>

        {accountItems.map((item, index) => (
          <LinkBox
            key={index}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            onClick={item.onClick}
          />
        ))}
      </section>
    </Container>
  );
};

export default Account;
