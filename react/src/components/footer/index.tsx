import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import FooterNavigation from "src/components/footer/footer-navigation";
import { useIsCertainPage } from "src/hooks/useIsCertainPage";

const Footer: FC = () => {
  const navigate = useNavigate();
  const isEventsPage = useIsCertainPage("/events", {
    startsWith: true,
  });

  if (isEventsPage) {
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
              <Typography
                className="cursor-pointer"
                onClick={() => navigate("/")}
              >
                <span className="text-[18pt] font-bold">
                  PARTY<span className="text-red-700">X</span>
                </span>
              </Typography>
              <Typography variant="subtitle2" sx={{ letterSpacing: 2, mb: 0 }}>
                <span className="text-gray-500">Party anytime, everywhere</span>
              </Typography>
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 4 }}>
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
