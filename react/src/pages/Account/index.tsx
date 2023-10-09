import { useNavigate } from "react-router-dom";
import Container from "src/components/Container";
import getAccountItems from "./Components/AccountItems";
import { LinkBox } from "./Components/LinkBox";

const Account: React.FC = () => {
  const navigate = useNavigate();
  const accountItems = getAccountItems(navigate);

  return (
    <Container>
      {accountItems.map((item, index) => (
        <LinkBox
          key={index}
          icon={item.icon}
          title={item.title}
          subtitle={item.subtitle}
          onClick={item.onClick}
        />
      ))}
    </Container>
  );
};

export default Account;
