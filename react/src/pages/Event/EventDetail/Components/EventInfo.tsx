import useCountries from "src/hooks/useCountries";

import { Suspense, lazy } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { Address } from "src/interfaces/event";
import InfoTextBox from "./InfoTextBox";

const InfoTexts = [
  {
    title: "I have not received my ticket by email. What should I do?",
    desc: "The first thing you have to do is check the spam, junk mail and advertising folder, as unfortunately we sometimes throw it there. This is because your tickets have been sent as an attachment and it can be regarded as spam by some systems. Alternatively, you can always find your tickets by logging into your Billetto account, which you can access via our app or browser. For more help,",
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

const Map = lazy(() => import("src/components/Map"));

interface EventInfoProps {
  title: string;
  hostName: string;
  hostProfilePhoto: string;
  desc: string;
  address: Address;
}

const EventInfo: React.FC<EventInfoProps> = ({
  title,
  hostName,
  hostProfilePhoto,
  desc,

  address,
}) => {
  const { getCountryByValue } = useCountries();

  const location = address ? getCountryByValue(address.country) : undefined;

  const coordinates =
    address && getCountryByValue(address.country)?.coordinates;

  return (
    <div className="flex flex-col gap-3 col-span-4 mb-3">
      <div className="p-5 bg-gray-50 rounded-xl border-[1px] border-neutral-200">
        <section className="">
          <div className="mb-2">
            <h2 className="text-[13pt] font-bold">{title}</h2>
            <span className="text-[11pt] text-gray-600 font-semibold">
              This party is in {address.city}, {address?.country}{" "}
              {location?.flag}
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[11pt]">{desc}</span>

            <span className="text-[12pt] underline cursor-pointer">
              Read more
            </span>
          </div>
        </section>
      </div>

      <div className="p-5 bg-gray-50 rounded-xl border-[1px] border-neutral-200">
        <section className="flex flex-col gap-3">
          <div className="mb-2">
            <h2 className="text-[13pt] font-bold">Location</h2>

            <span className="text-[11pt] text-gray-600 font-semibold">
              {address.street}, {address.city}, {address.country}
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
            <h2 className="text-[13pt] font-bold mb-2">Organizer</h2>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center gap-2">
                {/* host photo */}
                <div className="p-1">
                  <img
                    className="rounded-full"
                    height="40"
                    width="40"
                    alt="Avatar"
                    src={hostProfilePhoto}
                  />
                </div>

                {/* host name and role */}
                <div className="flex flex-col">
                  <span className="text-[11pt] text-gray-900 font-semibold">
                    {hostName}
                  </span>
                  <span className="text-[10pt] text-gray-500">
                    event organizer
                  </span>
                </div>
              </div>

              <div className="cursor-pointer py-1 px-2 border-[1px] rounded-md border-neutral-400">
                Contact
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="p-5 bg-gray-50 rounded-xl border-[1px] border-neutral-200">
        <section className="flex flex-col gap-3">
          <div className="mb-2">
            <div className="flex flex-row items-center justify-between">
              <span>
                <h2 className="text-[13pt] font-bold mb-2">FAQ</h2>
              </span>

              <span className="hidden cursor-pointer">
                <BiPlus size={20} />
              </span>

              <span className="cursor-pointer">
                <BiMinus size={20} />
              </span>
            </div>
          </div>

          <section className="flex flex-col gap-6">
            {InfoTexts.map((info) => (
              <InfoTextBox
                key={info.title}
                title={info.title}
                desc={info.desc}
                path={info.path}
              />
            ))}
          </section>
        </section>
      </div>
    </div>
  );
};

export default EventInfo;
