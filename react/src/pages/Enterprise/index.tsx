import Button from "src/components/Button";
import ClientOnly from "src/components/ClientOnly";
import Container from "src/components/Container";
import useLoginModal from "src/hooks/useLoginModal";
import { SafeUser } from "src/interfaces/user";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const EnterpriseAdvantages: React.FC<UserMenuProps> = ({ currentUser }) => {
  const loginModal = useLoginModal();

  return (
    <ClientOnly>
      <Container>
        <div className="p-5 items-center max-w-xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-12">
            Unlock New Possibilities
          </h1>

          {/* Event Organizers & Promoters */}
          <section>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md space-y-6 mb-10">
              <h2 className="text-2xl font-semibold text-center">Festivals</h2>
              <p>
                Connect directly with eager attendees. Boost ticket sales, shine
                brighter, and create unforgettable moments with PartyX.
              </p>
            </div>
          </section>

          {/* Nightclubs & Venues */}
          <section>
            <div className="bg-red-100 p-6 rounded-lg shadow-md space-y-6 mb-10">
              <h2 className="text-2xl font-semibold text-center">
                Club events
              </h2>
              <p>
                Fill up your space every night. Be the hotspot everyone's
                talking about. PartyX brings the crowd to you.
              </p>
            </div>
          </section>

          <section className="text-center">
            <p className="text-xl font-medium mb-5">
              boost your revenue today with partyx
            </p>

            <Button
              onClick={currentUser ? loginModal.onOpen : loginModal.onOpen}
              label={"Dive In Now"}
            />
          </section>
        </div>
      </Container>
    </ClientOnly>
  );
};

export default EnterpriseAdvantages;
