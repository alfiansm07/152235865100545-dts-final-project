import {
  Alert,
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CariBerita = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [error, setError] = useState();
  const handleChange = (event) => {
    setQuery(event.target.value);
    console.log(query);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (query === "") {
      setError("masukan kata kunci,tidak boleh kosong.");
    } else {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div>
      {" "}
      <Typography variant="h5" color="initial" my={3}>
        Cari Berita
      </Typography>
      <Container sx={{ background: "#F6DDDC" }} paddingY={3} minHeight="200px">
        <Box py={5}>
          <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={1}
          >
            <Box
              component="form"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <Typography variant="subtitle2" color="initial">
                Masukan Kata Kunci Berita yang Ingin Dicari
              </Typography>

              <TextField
                id="outlined-name"
                label="Name"
                onChange={handleChange}
                placeholder="Masukan Kata Kunci"
                sx={{ display: "flex ", marginY: "20px" }}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Cari
              </Button>
              {error && (
                <Alert variant="outlined" severity="error">
                  {error}
                </Alert>
              )}
            </Box>
          </Stack>
        </Box>
      </Container>
    </div>
  );
};

export default CariBerita;
