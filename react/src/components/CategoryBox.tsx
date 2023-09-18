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
        url: "/events/",
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
        flex-row
        items-center 
        justify-center 
        gap-2
        px-2
        py-1
        mb-2
        border-1
        rounded-lg
        hover:text-neutral-900
        transition
        cursor-pointer
        ${selected ? "border-2 border-neutral-800" : "border-neutral-400"}
        ${selected ? "text-neutral-800" : "text-neutral-500"}
      `}
    >
      <div className="flex flex-row items-center justify-center gap-2">
        <Icon size={21} />
        <div className="font-semibold text-[9pt]">{label}</div>
      </div>
    </div>
  );
};

export default CategoryBox;
