import { useNavigate } from "react-router-dom";
import getAccountItems from "./Components/AccountItems";
import { LinkBox } from "./Components/LinkBox";

const AccountLinks = () => {
  const navigate = useNavigate();
  const accountItems = getAccountItems(navigate);

  return (
    <div className="flex flex-col bg-gray-50 rounded-lg shadow border-[1px] border-neutral-200 overflow-hidden p-6">
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
  );
};

export default AccountLinks;
