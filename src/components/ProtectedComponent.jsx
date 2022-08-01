import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import Logout from "./Logout";

const ProtectedComponent = ({ children }) => {
  const [user, isLoading] = useAuthState(auth);

  if (isLoading) {
    return (
      <Box
        sx={{
          backgroundColor: "black",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress color="primary" />
      </Box>
    );
  }
  if (user) {
    return children;
  }
  return <Logout />;
};

export default ProtectedComponent;
