import Button from "src/components/Button";
import Container from "src/components/Container";
import useLoginModal from "src/hooks/useLoginModal";

const Main = () => {
  const loginModal = useLoginModal();

  return (
    <Container>
      <div className="px-2 flex flex-col gap-4 pb-10">
        <span className="text-[27pt] font-extrabold">
          List your party and get paid
        </span>
        <span className="text-[13pt] font-normal">
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

export default Main;