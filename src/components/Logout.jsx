import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  return (
    <>
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
            Login Dulu!!!!
          </Typography>
          <Box>
            <Button
              onClick={() => {
                navigate("/login");
              }}
              color="primary"
              size="large"
              variant="contained"
            >
              Go to Home
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Logout;
