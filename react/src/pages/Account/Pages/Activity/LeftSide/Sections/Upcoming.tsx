import { events } from "src/services/api-examples/events";
import { formatDate } from "src/utils/formatDate";
import ItemCard from "../Components/ItemCard";

const Upcoming = () => {
  return (
    <div className="py-3 flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <span className="font-bold text-[15pt]">Upcoming</span>

        {/* <div className="flex flex-col gap-2">
          <span className="text-gray-800">You have no upcoming tickets</span>

          <div className="cursor-pointer flex flex-row items-center gap-1">
            <span className="font-semibold text-[11pt]">Find a party</span>
            <span>
              <AiOutlineArrowRight />
            </span>
          </div>
        </div> */}

        {events.slice(5, 7).map((event, index) => (
          <ItemCard
            key={index}
            img={event.img}
            title={event.title}
            date={formatDate(event.startDate, {
              endDate: event.endDate,
            })}
            street={event.address.street}
            city={event.address.city}
          />
        ))}

        <div className="bg-gray-50 rounded-lg shadow border-[1px] border-neutral-200">
          <div className="flex flex-row gap-2">
            <div className="h-[60pt] w-[70pt] rounded-l-lg">
              <img
                src={"/images/party.jpg"}
                alt="User upload"
                className={`w-full h-full rounded-l-lg`}
              />
            </div>

            <div className="p-2 w-full">
              <div className="flex flex-col gap-1">
                <div className="flex flex-row items-center justify-between w-full">
                  <span className="font-extrabold text-[10pt]">
                    Sunday night out
                  </span>

                  <span
                    onClick={() => alert("Not yet!")}
                    className="cursor-pointer font-bold text-[10pt] text-gray-700"
                  >
                    View detail
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="font-bold text-[9pt] text-gray-700">
                    12:00 PM, 15 Jan 2024
                  </span>
                  <span className="font-bold text-[9pt] text-gray-700">
                    13 hypoteksvagen
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
