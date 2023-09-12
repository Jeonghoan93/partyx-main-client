import qs from "query-string";
import { useCallback } from "react";
import { IconType } from "react-icons";
import { useLocation, useNavigate } from "react-router-dom";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

type QueryParams = Record<string, string | undefined> & {
  category?: string;
};

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
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
      category: label,
    };

    if (params?.get("category") === label) {
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
  }, [label, navigate, location.search]);

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
      <Icon size={21} />
      <div className="font-semibold text-[9pt]">{label}</div>
    </div>
  );
};

export default CategoryBox;
