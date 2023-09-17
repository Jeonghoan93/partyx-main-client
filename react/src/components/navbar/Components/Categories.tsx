import { useLocation } from "react-router-dom";
import { categories } from "src/utils/constants";
import CategoryBox from "../../CategoryBox";
import Container from "../../Container";

const Categories = () => {
  const location = useLocation();

  const params = new URLSearchParams(location.search);

  const category = params?.get("category");
  const pathname = location.pathname;
  const isEventsPage = pathname === "/events";
  const isHomePage = pathname === "/";

  if (!isEventsPage && !isHomePage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-3
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-y-auto
          gap-2
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
