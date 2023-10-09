import { FaBook, FaCreditCard, FaLock, FaUser } from "react-icons/fa";

const getAccountItems = (navigate: (path: string) => void) => [
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
];

export default getAccountItems;
