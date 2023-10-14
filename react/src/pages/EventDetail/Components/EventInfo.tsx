import { Suspense, lazy } from "react";
import { FcOvertime } from "react-icons/fc";
import { FiExternalLink } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import InfoCard from "src/Components/TextBox/InfoCard";
import useCurrentLocation from "src/hooks/useCurrentLocation";

const InfoTexts = [
  {
    title: "I have not received my ticket by email. What should I do?",
    desc: "The first thing you have to do is check the spam, junk mail and advertising folder, as unfortunately we sometimes throw it there. This is because your tickets have been sent as an attachment and it can be regarded as spam by some systems. Alternatively, you can always find your tickets by logging into your PartyX account, which you can access via our app or browser. For more help,",
    path: "/",
  },
  {
    title: "I want to cancel my ticket and receive a refund. What should I do?",
    desc: "Unfortunately, most tickets cannot always be refunded. However, you are always welcome to contact the organizer directly to see if they are willing to accept your request for a refund. You can contact the organizer by clicking on organizer and then contact or reply to your order confirmation. For more help,",
    path: "/",
  },
  {
    title: "I have signed up for the waiting list, what happens now?",
    desc: "If more tickets become available, you will be notified (via e-mail) along with the others registered on the waiting list. It is on a first-come, first-served basis. For more information,",
    path: "/",
  },
  {
    title: "Where can I find the link to an online event?",
    desc: "On the order confirmation page for completed purchases or on the order confirmation sent to you by email. Normally, the organizer of the event will inform you about this in your order confirmation email, which you receive from us, or after the order is booked, send you an email with the information you need. You can also read the event description, as they may have explained there how to access the event. For more information,",
    path: "/",
  },
];

const Map = lazy(() => import("src/Components/Map"));

interface EventInfoProps {
  title: string;
  hostName: string;
  hostProfilePhoto: string;
  desc: string;
  minGuests?: number;
  maxGuests?: number;
}

const EventInfo: React.FC<EventInfoProps> = ({
  title,
  hostName,
  hostProfilePhoto,
  desc,
  minGuests,
  maxGuests,
}) => {
  const navigate = useNavigate();

  const currentLocation = useCurrentLocation();

  const coordinates = [
    currentLocation?.latitude || 0,
    currentLocation?.longitude || 0,
  ];

  return (
    <div className="flex flex-col gap-3 col-span-4 mb-3">
      <div className="p-5 bg-gray-50 rounded-xl border-[1px] border-neutral-200">
        <section className="">
          <div className="mb-2">
            <span className="text-[17pt] font-extrabold">{title}</span>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[11pt]">{desc}</span>
          </div>

          <hr className="my-2" />

          <div className="flex flex-row justify-between items-center">
            <span className="text-[11pt]" style={{ maxWidth: "330px" }}>
              <span className="font-semibold">Only 22 hours left to book.</span>{" "}
              The host will stop accepting bookings for your dates soon.
            </span>

            <span>
              <FcOvertime size={25} />
            </span>
          </div>
        </section>
      </div>

      <div className="p-5 bg-gray-50 rounded-xl border-[1px] border-neutral-200">
        <section className="flex flex-col gap-3">
          <div className="mb-2">
            <h2 className="text-[13pt] font-bold">Location</h2>

            <span className="text-[11pt] text-gray-600 font-semibold">
              {currentLocation.street || "Upplandsgatan"},{" "}
              {currentLocation.city || "Stockholm"},{" "}
              {currentLocation.country || "Sweden"}
            </span>
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            <Map center={coordinates} />
          </Suspense>

          <div className="flex flex-col gap-3">
            <span className="text-[12pt] underline cursor-pointer">
              See more detail
            </span>
          </div>
        </section>
      </div>

      <div className="p-5 bg-gray-50 rounded-xl border-[1px] border-neutral-200">
        <section className="flex flex-col gap-3">
          <div className="mb-2">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col">
                <span className="text-[13pt] font-bold">
                  hosted by {hostName}
                </span>

                <span>
                  From {minGuests} to {maxGuests} people joining
                </span>
              </div>

              <div
                onClick={() => navigate(`/profile/${hostName}}`)}
                className="cursor-pointer flex flex-col items-center gap-1"
              >
                <span>
                  <img
                    className="rounded-full"
                    height="40"
                    width="40"
                    alt="Avatar"
                    src={hostProfilePhoto}
                  />
                </span>
                <div className="flex flex-row items-center gap-1">
                  <span className="text-[10pt] font-bold">See Profile</span>
                  <span>
                    <FiExternalLink />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <InfoCard title={"FAQ"} infoTexts={InfoTexts} />
    </div>
  );
};

export default EventInfo;
