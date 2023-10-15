import InfoCard from "src/components/TextBox/InfoCard";
import Host from "./Cards/Host";
import Location from "./Cards/Location";
import NameDesc from "./Cards/NameDesc";

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

interface EventInfoProps {
  title: string;
  hostName?: string;
  hostProfilePhoto?: string;
  desc: string;
  hostId?: number;
  minGuests?: number;
  maxGuests?: number;
}

const LeftSide: React.FC<EventInfoProps> = ({
  title,
  hostName,
  hostProfilePhoto,
  desc,
  minGuests,
  maxGuests,
  hostId,
}) => {
  return (
    <div className="flex flex-col gap-3 col-span-4 mb-3">
      <NameDesc title={title} desc={desc} />
      <Location />
      <Host
        hostName={hostName}
        hostProfilePhoto={hostProfilePhoto}
        minGuests={minGuests}
        maxGuests={maxGuests}
        hostId={hostId}
      />

      <InfoCard title={"FAQ"} infoTexts={InfoTexts} />
    </div>
  );
};

export default LeftSide;
