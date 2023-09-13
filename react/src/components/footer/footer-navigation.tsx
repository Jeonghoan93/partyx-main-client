import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import { FC } from "react";
import { FooterSectionTitle } from "src/components/footer";
import Link from "src/components/Link";

export interface Navigation {
  label: string;
  path: string;
}

const contactMenu = [
  {
    label: "partyx@info.com",
    path: "#", // '/',
  },
];

const partnerMenu: Array<Navigation> = [
  {
    label: "Club owners",
    path: "#",
  },
  {
    label: "Festival organizations",
    path: "#",
  },
  {
    label: "Rave organizers",
    path: "#",
  },
];

const companyMenu: Array<Navigation> = [
  { label: "Mission", path: "#" },
  { label: "Careers", path: "#" },
  { label: "Investors", path: "#" },
];

const NavigationItem: FC<Navigation> = ({ label, path }) => {
  return (
    <Link href={path}>
      <MuiLink
        underline="hover"
        sx={{
          display: "block",
          mb: 1,
          color: "primary.contrastText",
        }}
      >
        {label}
      </MuiLink>
    </Link>
  );
};

const FooterNavigation: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Company" />
        {companyMenu.map(({ label, path }, index) => (
          <NavigationItem
            key={index + path}
            label={label}
            path={/* path */ "#"}
          />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Contact us" />
        {contactMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Partnerships" />
        {partnerMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
    </Grid>
  );
};

export default FooterNavigation;
