import ApplePayCard from "./Cards/ApplePayCard";
import CardPaymentCard from "./Cards/CardPaymentCard";
import GooglePayCard from "./Cards/GooglePayCard";
import SwishCard from "./Cards/SwishCard";

interface LeftSideProps {
  isLoading: boolean;
  onSubmit: () => Promise<void>;
}

const LeftSide: React.FC<LeftSideProps> = ({ isLoading, onSubmit }) => {
  return (
    <div className="flex flex-col gap-3 col-span-4 mb-3">
      <CardPaymentCard onSubmit={onSubmit} isLoading={isLoading} />
      <SwishCard />
      <ApplePayCard />
      <GooglePayCard />
    </div>
  );
};

export default LeftSide;
