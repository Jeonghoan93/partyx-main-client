import { useNavigate } from "react-router-dom";
import Container from "src/components/Container";
import getAccountItems from "./Components/AccountItems";
import { LinkBox } from "./Components/LinkBox";

const AccountLinks = () => {
  const navigate = useNavigate();
  const accountItems = getAccountItems(navigate);

  return (
    <Container>
      <div className="py-3 p-1">
        {accountItems.map((item, index) => (
          <LinkBox
            key={index}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            onClick={item.onClick}
          />
        ))}
      </div>
    </Container>
  );
};

export default AccountLinks;
