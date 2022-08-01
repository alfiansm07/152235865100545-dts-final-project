import { Box } from "@mui/system";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          flexDirection: "column",
          display: "flex",
          minHeight: "100vh",
          // display: "realtive",
        }}
      >
        <Navbar />
        {children}
        <Box sx={{ flex: "1" }}></Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
