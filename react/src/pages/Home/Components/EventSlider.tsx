import React from "react";
import ReactSlider from "react-slider";
import EventCard from "./EventCard";

type Event = {
  title: string;
  img: string;
  price: number;
  desc: string;
  userName: string;
  userPhoto: string;
};

type EventSliderProps = {
  events: Event[];
};

const EventSlider: React.FC<EventSliderProps> = ({ events }) => {
  return (
    <ReactSlider
      value={0}
      max={events.length - 1}
      renderThumb={({ props }, state) => (
        <div {...props}>
          <EventCard {...events[state.value]} />
        </div>
      )}
      className="h-96"
      thumbClassName="thumb"
      trackClassName="track"
    />
  );
};

export default EventSlider;
