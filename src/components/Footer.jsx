import { Box, Container } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box>
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Typography variant="body1" color="initial">
            Build With ❤️ @Muhammad Alfian Syah
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
