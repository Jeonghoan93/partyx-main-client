import Container from "src/components/Container";
import EmptyState from "src/components/EmptyState";
import EventCard from "src/components/events/EventCard";
import { Event } from "src/interfaces/event";
import { events } from "src/services/api-examples/events";
import { MockedUser } from "src/services/api-examples/user";
// import { IEventsParams } from "src/services/event/dto";

// interface HomeProps {
//   searchParams: IEventsParams;
// }

function EventList() {
  // const [events, setEvents] = useState([]);
  // const [currentUser, setCurrentUser] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await getEvents(searchParams);
  //     const user = await getCurrentUser();
  //     setEvents(data);
  //     setCurrentUser(user);
  //   }
  //   fetchData();
  // }, [searchParams]);

  const currentUser = MockedUser;

  if (events.length === 0) {
    return <EmptyState showReset />;
  }

  return (
    <Container>
      <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
        {events.map((event: Event) => (
          <EventCard
            currentUser={currentUser}
            key={event.eventId}
            data={event}
          />
        ))}
      </div>
    </Container>
  );
}

export default EventList;
