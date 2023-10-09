import Button from "src/components/Button";
import useLoginModal from "src/hooks/useLoginModal";

const MainSection = () => {
  const loginModal = useLoginModal();

  return (
    <div className="flex flex-col gap-4 pb-10">
      <span className="text-[27pt] font-bold">
        List your party and get paid
      </span>
      <span className="text-[13pt] font-normal">
        Host your event on the platform with the largest network of active party
        events.
      </span>
      <span style={{ maxWidth: "200px" }}>
        <Button label={"Sign up to earn"} onClick={loginModal.onOpen} />
      </span>
      <span
        onClick={() => alert("Not yet!")}
        className="cursor-pointer underline text-gray-800"
      >
        Learn more about listing party event
      </span>
    </div>
  );
};

export default MainSection;
