import { differenceInDays } from "date-fns";
import { useLocation } from "react-router-dom";

import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";

import useSearchModal from "src/hooks/useSearchModal";
import { formatDate } from "src/utils/formatDate";

const Search = () => {
  const searchModal = useSearchModal();
  const location = useLocation();

  const params = new URLSearchParams(location.search);

  const locationValue = params?.get("cityValue");
  const startDate = params?.get("startDate");
  const endDate = params?.get("endDate");
  const guestCount = params?.get("guestCount");

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return locationValue;
    }

    return "Search";
  }, [locationValue]);

  const dateLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);
      let diff = differenceInDays(end, start);

      if (diff === 0) {
        diff = 1;
      }

      const startLabel = formatDate(start, {});

      const endLabel = formatDate(end, {});

      return `${startLabel} - ${endLabel}`;
    }

    return "";
  }, [startDate, endDate]);

  const guestLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} Guests`;
    }

    return "Events";
  }, [guestCount]);

  return (
    <div
      onClick={searchModal.onOpen}
      className="
        border-[1px] 
        w-full 
        md:w-auto 
        py-2
        rounded-full 
        shadow-sm 
        hover:shadow-md 
        transition 
        cursor-pointer
        lg:hidden
      "
    >
      <div
        className="
          flex 
          flex-row 
          items-center 
          justify-between
        "
      >
        <div
          className="
            text-sm 
            font-semibold 
            px-6
          "
        >
          {locationLabel}
        </div>
        <div
          className="
            hidden 
            sm:block 
            text-sm 
            font-semibold 
            px-6 
            border-l-[1px] 
            flex-1 
            text-center
          "
        >
          {dateLabel}
        </div>
        <div
          className="
            text-sm 
            pl-6 
            pr-2 
            text-gray-600 
            flex 
            flex-row 
            items-center 
            gap-3
          "
        >
          <div
            className=" 
            text-sm 
            font-semibold 
            pl-3 
            border-l-[1px] 
            flex-1 
            text-center 
            "
          >
            {guestLabel}
          </div>
          <div
            className="
              p-2 
              bg-gray-500 
              rounded-full 
              text-white
            "
          >
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
