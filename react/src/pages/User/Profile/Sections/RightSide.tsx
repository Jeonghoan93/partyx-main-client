import MiniProfile from "../Components/MiniProfile";
import Search from "../Components/Search";
import { popularHosts } from "../Constants";

const RightSide: React.FC = () => {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 bg-gray-50 rounded-xl border-[1px] border-neutral-200 overflow-hidden p-6">
        <Search />
      </div>

      <div className="p-5 bg-gray-50 rounded-xl border-[1px] border-neutral-200">
        <section className="flex flex-col gap-3">
          <div className="my-2">
            <h2 className="text-[13pt] font-bold mb-4">Popular hosts</h2>

            {popularHosts.map((host, index) => (
              <MiniProfile
                key={index}
                name={host.name}
                img={host.img}
                desc={host.desc}
                hostedEvents={host.hostedEvents}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default RightSide;
