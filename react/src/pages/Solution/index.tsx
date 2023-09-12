import ClientOnly from "src/components/ClientOnly";
import Container from "src/components/Container";

const Solution: React.FC = () => {
  return (
    <ClientOnly>
      <Container>
        <div className="p-6 space-y-8">
          <h1 className="text-3xl font-bold text-center">Why Choose PartyX?</h1>
          <ul className="space-y-4">
            <li className="flex items-center space-x-6">
              <img
                src="https://via.placeholder.com/100"
                alt="Empowerment Image"
                className="w-24 h-24 rounded-full"
              />
              <div>
                <strong className="text-xl">Empowerment:</strong> Anyone can be
                a host. From club owners to individuals, transform any space
                into a party destination.
              </div>
            </li>
            <li className="flex items-center space-x-6">
              <img
                src="https://via.placeholder.com/100"
                alt="Earn Image"
                className="w-24 h-24 rounded-full"
              />
              <div>
                <strong className="text-xl">Earn:</strong> List your event and
                monetize your space. Create memorable events and earn at the
                same time.
              </div>
            </li>
            <li className="flex items-center space-x-6">
              <img
                src="https://via.placeholder.com/100"
                alt="Match Interests Image"
                className="w-24 h-24 rounded-full"
              />
              <div>
                <strong className="text-xl">Match Interests:</strong> Connect
                with like-minded people. Our platform matches attendees to
                events they'll love.
              </div>
            </li>
            <li className="flex items-center space-x-6">
              <img
                src="https://via.placeholder.com/100"
                alt="Versatile Image"
                className="w-24 h-24 rounded-full"
              />
              <div>
                <strong className="text-xl">Versatile:</strong> Suitable for
                grand festivals or intimate gatherings. Scale doesn't matter,
                your passion does.
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Solution;
