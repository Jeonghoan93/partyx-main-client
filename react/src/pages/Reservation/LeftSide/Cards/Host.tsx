import { useNavigate, useParams } from "react-router-dom";
import LineContainer from "src/Components/LineContainer";
import { Event } from "src/interfaces/event";
import { events } from "src/services/api-examples/events";

const Host = () => {
  const navigate = useNavigate();
  const { eventId } = useParams<{ eventId: string }>();

  // const event = getEventById(params.eventId);
  const eventData = events.find(
    (event: Event) => event.eventId === Number(eventId)
  );

  return (
    <LineContainer>
      <section className="flex flex-col gap-3">
        <div className="mb-2">
          <h2 className="text-[13pt] font-bold mb-2">Event organizer</h2>
          <div className="flex flex-row justify-between items-center">
            <div
              onClick={() => navigate("/profile/jimmy")}
              className="cursor-pointer flex flex-row items-center gap-2"
            >
              {/* host photo */}
              <div className="p-1">
                <img
                  className="rounded-full"
                  height="40"
                  width="40"
                  alt="Avatar"
                  src={eventData?.hostProfilePhoto}
                />
              </div>

              {/* host name and role */}
              <div className="flex flex-col">
                <span className="text-[10pt] text-gray-900 font-semibold">
                  {eventData?.hostName}
                </span>
              </div>
            </div>

            <div
              onClick={() => alert("Please contact thru Linkedin")}
              className="cursor-pointer py-1 px-2 border-[1px] rounded-md border-neutral-400"
            >
              <span className="text-[10pt] font-semibold">Message</span>
            </div>
          </div>
        </div>
      </section>
    </LineContainer>
  );
};

export default Host;
