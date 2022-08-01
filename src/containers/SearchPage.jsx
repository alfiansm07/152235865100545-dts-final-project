import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Client from "../apis/Client";
import CardNews from "../components/CardNews";
import Loading from "../components/Loading";
import useAxios from "../hooks/useAxios";

const SearchPage = () => {
  let { query } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const handleSubmit = (event) => {
    if (input === "") {
      event.preventDefault();
      setError("masukan kata kunci");
    } else {
      event.preventDefault();
      navigate(`/search/${input}`);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    setError("");
    const fetchData = async () => {
      console.log("ini fechdata", query);
      if (query === undefined || "") {
        setIsLoading(false);
        navigate("/search");
        return (
          <Typography variant="body1" color="initial">
            tes
          </Typography>
        );
      } else {
        try {
          const result = await Client.get(`/api/search?search=${query}`);
          setResult(result.data);
          console.log(result);
          setIsLoading(false);
          if (result.data.length === 0) {
            setError("tidak ada hasil ");
          }
          console.log("result data", result.data);
        } catch (error) {
          console.log("err", error);
          setIsLoading(false);
        }
      }
    };
    fetchData();
  }, [navigate]);

  return (
    <Box>
      <Container sx={{ background: "#F6DDDC" }}>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          my={3}
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            sx={{ height: "300px" }}
          >
            <Typography variant="h5" color="initial">
              Masukan Kata Kunci Berita yang Ingin Dicari
            </Typography>
            <TextField
              id="outlined-name"
              onChange={(event) => setInput(event.target.value)}
              placeholder="Masukan Kata Kunci"
              sx={{ display: "flex ", marginY: "20px" }}
            />
            <Button variant="contained" color="primary" type="submit">
              Cari
            </Button>{" "}
            {error && (
              <Alert variant="filled" severity="error">
                {error}
              </Alert>
            )}
          </Stack>
        </Box>
      </Container>
      <Container maxWidth="xl">
        {isLoading ? (
          <Loading />
        ) : (
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            {result?.map((item) => {
              return <CardNews data={item} />;
            })}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default SearchPage;
