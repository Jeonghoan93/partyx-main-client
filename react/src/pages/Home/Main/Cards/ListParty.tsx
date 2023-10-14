import Button from "src/components/Button";
import Container from "src/components/Container";
import useLoginModal from "src/hooks/useLoginModal";

const ListParty = () => {
  const loginModal = useLoginModal();

  return (
    <Container>
      <div className="px-2 flex flex-col gap-4 pb-10">
        <span className="text-[20pt] font-extrabold">
          List your party and get paid
        </span>
        <span className="text-[11pt] font-semibold text-gray-700">
          Host your event on the platform with the largest network of active
          party events.
        </span>
        <span style={{ maxWidth: "200px" }}>
          <Button label={"Sign up to earn"} onClick={loginModal.onOpen} />
        </span>
      </div>
    </Container>
  );
};

export default ListParty;
