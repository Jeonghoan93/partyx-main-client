import { formatDate } from "src/utils/formatDate";

const MainHost = () => {
  return (
    <section className="mt-4">
      <div className="mb-2">
        <h2 className="text-[13pt] font-bold">Earning</h2>
        <span className="text-[11pt] text-gray-600 font-semibold">
          {formatDate(new Date(), {
            full: true,
          })}
        </span>
      </div>
      <div className="p-5">Earning box comes here</div>
    </section>
  );
};

export default MainHost;
