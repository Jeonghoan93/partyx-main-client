import qs from "query-string";
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface CategoryBoxProps {
  imgSrc: string;
  title: string;
  desc: string;
  currency: string;
  price: number;
  selected?: boolean;
}

type QueryParams = Record<string, string | undefined> & {
  category?: string;
};

const EventBox: React.FC<CategoryBoxProps> = ({
  imgSrc,
  title,
  desc,
  selected,
  currency,
  price,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = useCallback(() => {
    const params = new URLSearchParams(location.search);
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: QueryParams = {
      ...currentQuery,
      category: title,
    };

    if (params?.get("category") === title) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    navigate(url);
  }, [title, navigate, location.search]);

  return (
    <div
      onClick={handleClick}
      className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        p-3
        border-b-2
        hover:text-neutral-900
        transition
        cursor-pointer
        ${selected ? "border-b-neutral-800" : "border-transparent"}
        ${selected ? "text-neutral-800" : "text-neutral-500"}
      `}
    >
      <img className="w-full object-cover" src={imgSrc} />
      <div className="p-2">
        <div className="font-bold text-[11pt]">{title}</div>
        <div className="font-semibold text-[9pt]">{desc}</div>
        <div className="font-semibold text-[9pt]">
          {currency}-{price}
        </div>
      </div>
    </div>
  );
};

export default EventBox;
