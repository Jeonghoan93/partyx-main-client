import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FC } from "react";

interface Props {
  title: string;
}

const FooterSectionTitle: FC<Props> = ({ title }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mb: 2,
      }}
    >
      <Typography
        component="p"
        variant="h5"
        sx={{ color: "#111", fontWeight: "700" }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default FooterSectionTitle;
