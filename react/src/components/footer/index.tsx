import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import FooterNavigation from "src/components/footer/footer-navigation";
import { useIsCertainPage } from "src/hooks/useIsCertainPage";

const Footer: FC = () => {
  const isHomePage = useIsCertainPage("/");

  if (!isHomePage) {
    return null;
  }

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f5f5f5",
        py: { xs: 6, md: 10 },
        color: "#333",
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
