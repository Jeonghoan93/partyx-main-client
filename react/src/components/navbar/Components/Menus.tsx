import { useLocation } from "react-router-dom";
import MenuBox from "src/components/MenuBox";

interface MenusProps {
  page: string;
  menus: string[];
}

const Menus: React.FC<MenusProps> = ({ page, menus }) => {
  const location = useLocation();

  const params = new URLSearchParams(location.search);

  const menu = params?.get("menu");
  const pathname = location.pathname;
  const isPage = pathname === page;

  if (!isPage) {
    return null;
  }

  return (
    <div
      className="
        max-w-[2520px]
        mx-auto
        xl:px-16
        md:px-7
        sm:px-2
        px-5
      "
    >
      <div
        className="
          flex 
          flex-row 
          items-center 
          overflow-x-auto
          gap-4
        "
      >
        {menus.map((item) => (
          <MenuBox
            page={page}
            key={item}
            label={item}
            selected={menu === item}
          />
        ))}
      </div>
    </div>
  );
};

export default Menus;
