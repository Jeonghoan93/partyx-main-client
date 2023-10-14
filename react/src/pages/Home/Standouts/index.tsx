import { useWindowWidth } from "src/hooks/useWindowWidth";
import ItemsSlider from "./Components/ItemsSlider";
import NavbarStandouts from "./Components/NavbarStandouts";

const Standouts = () => {
  const windowWidth = useWindowWidth();

  if (windowWidth > 550) {
    return null;
  }

  return (
    <>
      <NavbarStandouts />

      <div className="relative w-full bg-white">
        <div className="p-1">
          <ItemsSlider />
        </div>
      </div>
    </>
  );
};

export default Standouts;
