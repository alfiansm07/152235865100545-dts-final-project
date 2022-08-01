import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
const NotFound = () => {
  return (
    <Container>
      <Box
        sx={{
          // bgcolor: "#cfe8fc",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" paragraph>
          {" "}
          Sorry, page not found!
        </Typography>
        <Box>
          <Button
            color="primary"
            to="/"
            size="large"
            variant="contained"
            component={RouterLink}
          >
            Go to Home
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default NotFound;
