import { useState } from "react";
import { animated, useSprings } from "react-spring";
import { useDrag } from "react-use-gesture";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import { events } from "src/services/api-examples/events";
import ItemCard from "./Components/ItemCard";

const Standouts = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 600;
  const [currentCard, setCurrentCard] = useState(0);

  const [springs, set] = useSprings(events.length, (index) => ({
    x: (index - currentCard) * windowWidth,
  }));

  const bind = useDrag(
    ({ movement: [mx], direction: [xDir], distance, cancel }) => {
      if (distance > windowWidth / 4) {
        cancel();
        if (xDir > 0) {
          setCurrentCard((prev) => (prev - 1 + events.length) % events.length);
        } else {
          setCurrentCard((prev) => (prev + 1) % events.length);
        }
      } else {
        set((index) => ({
          x:
            (index - currentCard) * windowWidth +
            (index === currentCard ? mx : 0),
        }));
      }
    },
    {
      rubberband: true,
      axis: "x",
    }
  );

  if (!isMobile) return null;

  return (
    <div className="fixed z-10 w-full bg-white">
      <div className="p-4">
        {springs.map(({ x }, index) => (
          <animated.div
            key={events[index].eventId}
            {...bind()}
            style={{
              transform: x.to((xValue) => `translateX(${xValue}px)`),
            }}
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
