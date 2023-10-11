import AccountLinks from "./Cards/AccountLinks";
import AccountSafety from "./Cards/AccountSafety";

const RightSide: React.FC = () => {
  return (
    <section className="flex flex-col gap-3">
      <AccountLinks />
      <AccountSafety />
    </section>
  );
};

export default RightSide;
