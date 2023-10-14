import React from "react";
import Container from "src/components/Container";
import ItemCard, { EventProps } from "./ItemCard";

const CardSlider: React.FC<{ events: EventProps[] }> = ({ events }) => {
  return (
    <Container>
      <div className="relative overflow-x-auto h-auto whitespace-nowrap no-scrollbar">
        {events.slice(5, 12).map((event) => (
          <ItemCard
            {...event}
            key={event.title}
            containerStyle={{
              display: "inline-block",
              maxWidth: "375px",
              marginRight: "1rem",
            }}
          />
        ))}
      </div>
    </Container>
  );
};

export default CardSlider;
