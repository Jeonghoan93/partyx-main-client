import Button from "src/components/Button";
import ClientOnly from "src/components/ClientOnly";
import Container from "src/components/Container";
import useLoginModal from "src/hooks/useLoginModal";
import useRentModal from "src/hooks/useRentModal";
import { SafeUser } from "src/interfaces/user";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const Enterprise: React.FC<UserMenuProps> = ({ currentUser }) => {
  const rentModal = useRentModal();
  const loginModal = useLoginModal();

  return (
    <ClientOnly>
      <Container>
        <h1 className="text-4xl font-bold text-center mb-12">
          Empower Your Events with PartyX
        </h1>

        {/* Festival Organizers */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-md space-y-6 mb-10">
          <img
            src="https://via.placeholder.com/200x150"
            alt="Festival Image"
            className="mx-auto"
          />
          <h2 className="text-2xl font-semibold text-center">
            Festival Organizers
          </h2>
          <p>
            Maximize your reach, sell tickets effortlessly, and make your
            festival the talk of the town with PartyX's powerful marketing and
            payment solutions.
          </p>
        </div>

        {/* Club Owners */}
        <div className="bg-red-100 p-6 rounded-lg shadow-md space-y-6 mb-10">
          <img
            src="https://via.placeholder.com/200x150"
            alt="Club Image"
            className="mx-auto"
          />
          <h2 className="text-2xl font-semibold text-center">Club Owners</h2>
          <p>
            Turn every night into a full house. List your events, manage
            reservations, and increase your revenue with PartyX. We've got the
            night covered!
          </p>
        </div>

        {/* Rave Organizers */}
        <div className="bg-purple-100 p-6 rounded-lg shadow-md space-y-6 mb-10">
          <img
            src="https://via.placeholder.com/200x150"
            alt="Rave Image"
            className="mx-auto"
          />
          <h2 className="text-2xl font-semibold text-center">
            Rave Organizers
          </h2>
          <p>
            Light up the night! PartyX simplifies your ticketing, increases
            visibility, and lets you focus on creating unforgettable rave
            experiences.
          </p>
        </div>

        {/* House Party Enthusiasts */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md space-y-6 mb-10">
          <img
            src="https://via.placeholder.com/200x150"
            alt="House Party Image"
            className="mx-auto"
          />
          <h2 className="text-2xl font-semibold text-center">
            House Party Enthusiasts
          </h2>
          <p>
            Your living room, the next party destination. With PartyX, anyone
            can be a host. Earn from your creativity and passion. The party
            starts at your home!
          </p>
        </div>

        <div className="text-center">
          <p className="text-xl font-medium mb-5">
            Every event deserves a spotlight. Let PartyX be your partner in
            success.
          </p>

          <Button
            onClick={currentUser ? rentModal.onOpen : loginModal.onOpen}
            label={" Join us Today"}
          />
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Enterprise;
