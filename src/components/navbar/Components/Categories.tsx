import { useLocation } from "react-router-dom";
import { categories } from "src/utils/constants";
import CategoryBox from "../../CategoryBox";
import Container from "../../Container";

const Categories = () => {
  const location = useLocation();

  const params = new URLSearchParams(location.search);

  const category = params?.get("category");
  const pathname = location.pathname;
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
