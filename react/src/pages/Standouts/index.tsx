import { useState } from "react";
import { animated, useSprings } from "react-spring";
import { useSwipeable } from "react-swipeable";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import { events } from "src/services/api-examples/events";
import ItemCard from "./Components/ItemCard";

const Standouts = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 600;
  const [currentCard, setCurrentCard] = useState(0);

  const [springs, set] = useSprings(events.length, (index) => ({
    x: (index - currentCard) * windowWidth, // x determines the offset from the left.
  }));

  const bind = useSwipeable({
    onSwiped: ({ dir }) => {
      let next = currentCard + (dir === "Left" ? 1 : -1);
      if (next < 0) next = events.length - 1; // Cyclic behavior
      if (next >= events.length) next = 0; // Cyclic behavior
      setCurrentCard(next);
      set((index) => ({
        x: (index - next) * windowWidth,
      }));
    },
    onSwiping: ({ deltaX }) => {
      set((index) => ({
        x: (index - currentCard) * windowWidth + deltaX,
      }));
    },

    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  if (!isMobile) return null;

  return (
    <div className="fixed z-10 w-full bg-white">
      <div className="p-4">
        {springs.map(({ x }, index) => (
          <animated.div
            key={events[index].eventId}
            style={{
              transform: x.to((xValue) => `translateX(${xValue}px)`),
            }}
            {...bind}
          >
            <ItemCard
              src={events[index].img}
              title={events[index].title}
              location={events[index].address.city}
              attendees={events[index].minGuests}
              currency={events[index].currency}
              price={events[index].price}
              visible={index === currentCard}
            />
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Standouts;
