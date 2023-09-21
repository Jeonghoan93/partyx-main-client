import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import FooterSectionTitle from "src/components/footer/footer-section-title";

export interface Navigation {
  label: string;
  path: () => void;
}

const NavigationItem: FC<Navigation> = ({ label, path }) => {
  return (
    <div className="cursor-pointer" onClick={path}>
      <MuiLink
        underline="hover"
        sx={{
          display: "block",
          mb: 1,
          color: "#333",
        }}
      >
        {label}
      </MuiLink>
    </div>
  );
};

const FooterNavigation: FC = () => {
  const navigate = useNavigate();

  const companyMenu: Array<Navigation> = [
    { label: "Mission", path: () => navigate("/company?menu=Mission") },
    { label: "Careers", path: () => navigate("/company?menu=Careers") },
    { label: "Investors", path: () => navigate("/company?menu=Investors") },
  ];

  const partnerMenu: Array<Navigation> = [
    {
      label: "Club owners",
      path: () => navigate("/partner?menu=club"),
    },
    {
      label: "Festival organizations",
      path: () => navigate("/partner?menu=festival"),
    },
    {
      label: "Rave organizers",
      path: () => navigate("/partner?menu=rave"),
    },
  ];

  const contactMenu = [
    {
      label: "partyx@info.com",
      path: () => navigate("/contact"),
    },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Company" />
        {companyMenu.map(({ label, path }, index) => (
          <NavigationItem key={index} label={label} path={path} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Contact us" />
        {contactMenu.map(({ label, path }, index) => (
          <NavigationItem key={index} label={label} path={path} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Partnerships" />
        {partnerMenu.map(({ label, path }, index) => (
          <NavigationItem key={index} label={label} path={path} />
        ))}
      </Grid>
    </Grid>
  );
};

export default FooterNavigation;
