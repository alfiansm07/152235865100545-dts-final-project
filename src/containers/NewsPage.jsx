import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/system";
import { Alert, AlertTitle, Card, CardMedia, Grid, Stack } from "@mui/material";
import Loading from "../components/Loading";
import CardNewsRight from "../components/CardNewsRight";
const NewsPage = () => {
  const navigate = useNavigate();
  let { tahun, bulan, tanggal, judul } = useParams();

  const [{ data, loading, error }, refetch] = useAxios(
    `/api/detail/${tahun}/${bulan}/${tanggal}/${judul}`
  );
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
  const { author, categories, content, date, figure, title } = data.results;
  console.log("halaman newspge", data.results);
  return (
    <Box>
      <Box sx={{ background: "black", height: "40vh" }}></Box>
      <Box
        sx={{
          position: "relative",
          marginTop: "-40vh",
        }}
      >
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12}>
              <Typography
                py={6}
                align="center"
                variant="h2"
                color="secondary.main"
              >
                {title}
              </Typography>
              <Card>
                <CardMedia
                  component="img"
                  height="420"
                  image={figure[0]}
                  alt={title}
                />
              </Card>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8}>
                <Stack direction="row" alignItems="center" my={3}>
                  <Typography variant="subtitle2">
                    by {author} | {date}{" "}
                  </Typography>
                </Stack>
                <Stack>
                  {content.map((desc) => {
                    if (desc.startsWith("https://")) {
                      return (
                        <Card>
                          <CardMedia
                            component="img"
                            height="100%"
                            image={desc}
                            alt={desc}
                          />
                        </Card>
                      );
                    } else {
                      return (
                        <Typography variant="body1" color="initial">
                          {desc}
                        </Typography>
                      );
                    }
                  })}
                </Stack>
              </Grid>
              <Grid item xs={12} sm={4} mt={4}>
                <CardNewsRight />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default NewsPage;
