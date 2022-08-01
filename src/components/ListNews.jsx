import {
  Alert,
  AlertTitle,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import useAxios from "../hooks/useAxios";
import CardNews from "./CardNews";
import CardNewsRight from "./CardNewsRight";
import CardNews2Right from "./CardNewsRight";
import Loading from "./Loading";

const ListNews = (props) => {
  const { url, kategori } = props;

  const [{ data, loading, error }, refetch] = useAxios({ url });

  if (loading) {
    return <Loading />;
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

  return (
    <>
      <Typography variant="h3" my={4}>
        {kategori}
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-end"
        spacing={2}
      >
        <Grid item>
          <Box
            mr={5}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {data.slice(0, 4).map((data) => (
              <CardNews key={data.key} data={data} />
            ))}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ListNews;
