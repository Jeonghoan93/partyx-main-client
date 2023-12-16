interface AcceptCookiesButtonProps {
  onClick?: () => void;
  isReject?: boolean;
}

const AcceptCookiesButton: React.FC<AcceptCookiesButtonProps> = ({
  onClick,
  isReject = false,
}) => {
  return (
    <span
      onClick={onClick}
      className={`${
        isReject ? "bg-orange-600" : "bg-green-600"
      } cursor-pointer text-[11pt] text-center w-full font-bold py-1 rounded-md border-md border-[1px] border-gray-600 text-stone-100`}
    >
      {isReject ? "Reject all" : "Accept all"}
    </span>
  );
};

export default AcceptCookiesButton;
