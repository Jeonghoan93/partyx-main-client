import Button from "src/components/Button";
import Container from "src/components/Container";
import { useCurrentUser } from "src/hooks/useCurrentUser";
import useLoginModal from "src/hooks/useLoginModal";

const Messages = () => {
  const currentUser = useCurrentUser();

  const loginModal = useLoginModal();

  if (!currentUser) {
    return (
      <Container>
        <div
          style={{ maxWidth: "500px" }}
          className="p-2 mt-10 flex flex-col h-screen gap-6"
        >
          <h2 className="text-[24pt] font-bold">Inbox</h2>

          <div className="flex flex-col gap-2">
            <span className="text-[14pt] font-bold">
              Log in to view your messages
            </span>
            <span className="text-[12pt] text-gray-600">
              You can view, send, or receive messages once you've logged in.
            </span>
          </div>

          <div style={{ maxWidth: "100px" }}>
            <Button label="Log in" onClick={loginModal.onOpen} />
          </div>
        </div>
      </Container>
    );
  }

  if (currentUser) {
    return (
      <Container>
        <div>Not yet implemented</div>
      </Container>
    );
  }
};

export default Messages;
