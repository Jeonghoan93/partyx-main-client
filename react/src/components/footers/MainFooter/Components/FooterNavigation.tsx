import { FC } from "react";
import { useNavigate } from "react-router-dom";
import FooterSectionTitle from "./FooterSectionTitle";

export interface Navigation {
  label: string;
  path: () => void;
}

const NavigationItem: FC<Navigation> = ({ label, path }) => {
  return (
    <div
      className="cursor-pointer font-semibold mb-1 block text-gray-600 hover:underline"
      onClick={path}
    >
      {label}
    </div>
  );
};

const FooterNavigation: FC = () => {
  const navigate = useNavigate();

  const companyMenu: Array<Navigation> = [
    { label: "Investor", path: () => navigate("/investor") },
    { label: "Careers", path: () => navigate("/careers") },
  ];

  const partnerMenu: Array<Navigation> = [
    {
      label: "Club owners",
      path: () => navigate("/partner?menu=Club%20Owner"),
    },
    {
      label: "Festival organizations",
      path: () => navigate("/partner?menu=Festival%20Organizer"),
    },
    {
      label: "Rave organizers",
      path: () => navigate("/partner?menu=Rave%20Organizer"),
    },
  ];

  const contactMenu = [
    {
      label: "LinkedIn",
      path: () =>
        window.open("https://www.linkedin.com/in/jimmy-h-199814242/", "_blank"),
    },
  ];

  return (
    <div className="flex flex-wrap -mx-2">
      <div className="w-full md:w-1/3 p-3">
        <FooterSectionTitle title="Company" />
        {companyMenu.map(({ label, path }, index) => (
          <NavigationItem key={index} label={label} path={path} />
        ))}
      </div>
      <div className="w-full md:w-1/3 p-3">
        <FooterSectionTitle title="Contact" />
        {contactMenu.map(({ label, path }, index) => (
          <NavigationItem key={index} label={label} path={path} />
        ))}
      </div>
      <div className="w-full md:w-1/3 p-3">
        <FooterSectionTitle title="Partnerships" />
        {partnerMenu.map(({ label, path }, index) => (
          <NavigationItem key={index} label={label} path={path} />
        ))}
      </div>
    </div>
  );
};

export default FooterNavigation;
