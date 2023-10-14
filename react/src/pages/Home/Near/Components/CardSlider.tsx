import React from "react";
import Container from "src/components/Container";
import ItemCard, { EventProps } from "./ItemCard";

const CardSlider: React.FC<{ events: EventProps[] }> = ({ events }) => {
  return (
    <Container>
      <div className="relative overflow-x-auto h-auto whitespace-nowrap no-scrollbar">
        {events.slice(3, 6).map((event) => (
          <ItemCard
            {...event}
            key={event.title}
            containerStyle={{
              display: "inline-block",
              width: "180px",
              marginRight: "1rem",
            }}
          />
        ))}
      </div>
    </Container>
  );
};

export default CardSlider;
