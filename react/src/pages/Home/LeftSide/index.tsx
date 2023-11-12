import ProductCard from "./Cards/ProductCard";
import WelcomeCard from "./Cards/WelcomeCard";

const LeftSide: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 col-span-4 mb-3">
      <WelcomeCard />
      <ProductCard />
    </div>
  );
};

export default LeftSide;
