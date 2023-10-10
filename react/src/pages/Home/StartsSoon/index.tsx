import Container from "src/components/Container";
import { Event } from "src/interfaces/event";
import { events } from "src/services/api-examples/events";
import SearchHistoryBox from "./Components/SearchHistoryBox";

const StartsSoon = () => {
  return (
    <Container>
      <div className="mb-2">
        <h2 className="text-[13pt] font-bold">Starts soon</h2>
      </div>
      <div className="flex flex-col gap-2 py-3">
        {events.slice(3, 6).map((event: Event) => (
          <SearchHistoryBox
            key={event.eventId}
            title={event.title}
            address={event.address}
            startDate={event.startDate}
            endDate={event.endDate}
            eventId={event.eventId}
          />
        ))}
      </div>
    </Container>
  );
};

export default StartsSoon;
