import { BiChevronLeft, BiLinkExternal } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import Container from "src/Components/Container";
import { Event } from "src/interfaces/event";
import { events } from "src/services/api-examples/events";

const NavbarReservation: React.FC = () => {
  const navigate = useNavigate();
  const { eventId } = useParams<{ eventId: string }>();

  // const event = getEventById(params.eventId);
  const eventData = events.find(
    (event: Event) => event.eventId === Number(eventId)
  );

  if (eventId) {
    return (
      <div className="fixed top-0 w-full bg-white z-10 shadow-sm">
        <div
          className="
          py-4
          border-b-[1px]
        "
        >
          <Container>
            <div
              className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
            >
              <div
                onClick={() => navigate(-1)}
                className="cursor-pointer flex flex-row items-center gap-1"
              >
                <span className="">
                  <BiChevronLeft size={30} />
                </span>
                <span className="text-[11pt] font-bold text-gray-700">
                  {eventData?.title}
                </span>
              </div>
              <div className="flex flex-row items-center gap-4">
                <span className="cursor-pointer">
                  <BiLinkExternal />
                </span>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
};

export default NavbarReservation;
