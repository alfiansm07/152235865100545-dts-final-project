import {
  Box,
  Container,
  Grid,
  Stack,
  Button,
  Alert,
  AlertTitle,
  Typography,
} from "@mui/material";
import React from "react";
import useAxios from "../hooks/useAxios";

const BreakingNews = () => {
  const [{ data, loading, error }, refetch] = useAxios("/api/tech?page=1");

  if (loading) {
    return <></>;
  }

  if (error) {
    return (
      <Container
        sx={{
          paddingY: 5,
        }}
      >
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error.message}
        </Alert>
      </Container>
    );
  }
  const { title, key } = data[0];

  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "primary.main" }}>
      <Grid
        container
        direction="row"
        // justifyContent="center"
        alignItems="center"
        minHeight="70px"
        justifyContent="space-evenly"
        py={3}
      >
        <Button
          variant="contained"
          color="secondary"
          sx={{ pointerEvents: "none" }}
        >
          BREAKIGN NEWS
        </Button>
        <Typography
          variant="h5"
          color="secondary.main"
          mt={{ xs: "10px", sm: "0" }}
        >
          {title}
        </Typography>
      </Grid>
    </Container>
  );
};

export default BreakingNews;
