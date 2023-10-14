import { useWindowWidth } from "src/hooks/useWindowWidth";
import ItemsSlider from "./Components/ItemsSlider";

const Standouts = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 600;

  if (!isMobile) return null;

  return (
    <div className="fixed z-10 w-full bg-white">
      <div className="p-4">
        <ItemsSlider />
      </div>
    </div>
  );
};

export default Standouts;
