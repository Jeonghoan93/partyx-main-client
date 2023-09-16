import ClientOnly from "src/components/ClientOnly";
import Container from "src/components/Container";

const Solution: React.FC = () => {
  return (
    <ClientOnly>
      <Container>
        <div className="p-4 items-center max-w-xl mx-auto space-y-10 bg-white">
          <h1 className="text-3xl font-bold text-center text-gray-900">
            Why Party with PartyX?
          </h1>
          <ul className="space-y-6">
            <li className="flex items-center space-x-6 border rounded-lg shadow-md p-4">
              <img
                src="https://via.placeholder.com/100"
                alt="Discovery Image"
                className="w-16 h-16 rounded-full"
              />
              <div className="flex flex-col">
                <strong className="text-[13pt] text-gray-500">
                  Discover & Explore:
                </strong>
                Experience new vibes, music, and meet new friends.
              </div>
            </li>
            <li className="flex items-center space-x-6 border rounded-lg shadow-md p-4">
              <img
                src="https://via.placeholder.com/100"
                alt="Social Integration Image"
                className="w-16 h-16 rounded-full"
              />
              <div className="flex flex-col">
                <strong className="text-[13pt] text-gray-500">
                  Stay Connected:
                </strong>
                See friends attending and share events across your social
                platforms.
              </div>
            </li>
            <li className="flex items-center space-x-6 border rounded-lg shadow-md p-4">
              <img
                src="https://via.placeholder.com/100"
                alt="Exclusive Deals Image"
                className="w-16 h-16 rounded-full"
              />
              <div className="flex flex-col">
                <strong className="text-[13pt] text-gray-500">
                  Exclusive Access:
                </strong>
                Get special deals, offers, and early bird tickets.
              </div>
            </li>
            <li className="flex items-center space-x-6 border rounded-lg shadow-md p-4">
              <img
                src="https://via.placeholder.com/100"
                alt="Safety Image"
                className="w-16 h-16 rounded-full"
              />
              <div className="flex flex-col">
                <strong className="text-[13pt] text-gray-500">
                  Your Safety First:
                </strong>
                Enjoy events with peace of mind. We prioritize your safety and
                privacy.
              </div>
            </li>
            {/* Add more features reflecting the psychological factors if needed */}
          </ul>
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Solution;
