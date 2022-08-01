import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import BannerTrending from "../components/BannerTrending";
import BreakingNews from "../components/BreakingNews";
import CardNewsRight from "../components/CardNewsRight";
import CariBerita from "../components/CariBerita";
import ListNews from "../components/ListNews";

const Home = () => {
  return (
    <div>
      <BannerTrending />
      <BreakingNews />
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} sm={9}>
            <ListNews url={"/api/tech?page=1"} kategori={"Teknologi "} />
            <ListNews url={"/api/games/news/?page=1"} kategori={"Games "} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CardNewsRight />
            <CariBerita />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
