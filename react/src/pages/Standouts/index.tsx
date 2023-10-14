import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import { events } from "src/services/api-examples/events";
import ItemCard from "./Components/ItemCard";

const Standouts = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 600;

  const [currentCard, setCurrentCard] = useState(0);

  const swipeable = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const handleSwipe = (direction: string) => {
    if (direction === "left" && currentCard < events.length - 1) {
      setCurrentCard(currentCard + 1);
    } else if (direction === "right" && currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
  };
  if (!isMobile) return null;

  return (
    <div className="fixed z-10 w-full bg-white">
      <div className="p-3" {...swipeable}>
        {events.map((card, index) => (
          <ItemCard
            key={card.eventId}
            src={card.img}
            title={card.title}
            location={card.address.city}
            attendees={card.minGuests}
            currency={card.currency}
            price={card.price}
            visible={index === currentCard}
          />
        ))}
      </div>
    </div>
  );
};

export default Standouts;
