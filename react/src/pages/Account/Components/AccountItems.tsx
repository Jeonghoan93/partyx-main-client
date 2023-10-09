import { BiBookContent } from "react-icons/bi";
import { FaBook, FaCreditCard, FaLock, FaUser } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const getAccountItems = (navigate: (path: string) => void) => [
  {
    icon: <GrMail />,
    title: "Messages",
    onClick: () => {
      navigate("/messages");
    },
  },
  {
    icon: <FaUser />,
    title: "Personal Info",
    subtitle: "Provide your personal details, bio and where you're from.",
    onClick: () => {
      navigate("/account/personal-info");
    },
  },
  {
    icon: <FaCreditCard />,
    title: "Payment & Payout",
    subtitle: "Manage your payment and payout methods.",
    onClick: () => {
      navigate("/account/payments");
    },
  },
  {
    icon: <FaLock />,
    title: "Login & Security",
    subtitle: "Change password, set up 2FA and more.",
    onClick: () => {
      navigate("/account/login-security");
    },
  },
  {
    icon: <FaBook />,
    title: "Taxes",
    subtitle: "Tax details and settings.",
    onClick: () => {
      navigate("/account/taxes");
    },
  },
  {
    icon: <BiBookContent />,
    title: "About PartyX app",

    onClick: () => {
      alert("Not yet!");
    },
  },
];

export default getAccountItems;
