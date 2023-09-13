import { useLocation } from "react-router-dom";
import Container from "src/components/Container";
import { events } from "src/pages/Home/api-examples/events";
import EventBox from "./EventBox";

const Events = () => {
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
          overflow-x-auto
          gap-2
        "
      >
        {events.map((item) => (
          <EventBox
            key={item.title}
            title={item.title}
            desc={item.desc}
            imgSrc={item.img}
            currency={item.currency}
            price={item.price}
            selected={category === item.title}
          />
        ))}
      </div>
    </Container>
  );
};

export default Events;
