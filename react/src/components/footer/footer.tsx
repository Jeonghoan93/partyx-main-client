import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { FooterNavigation, FooterSocialLinks } from "src/components/footer";

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        py: { xs: 6, md: 10 },
        color: "primary.contrastText",
      }}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={5}>
            <Box sx={{ width: { xs: "100%", md: 360 }, mb: { xs: 3, md: 0 } }}>
              <Typography component="h2" variant="h2" sx={{ mb: 2 }}>
                partyx
              </Typography>
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
                Stockholm, Sweden
              </Typography>
              <FooterSocialLinks />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <FooterNavigation />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
