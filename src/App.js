import React from "react";

import { configure } from "axios-hooks";
import theme from "./utils/theme";
import Axios from "axios";
import Coba from "./containers/Coba";
import Layout from "./components/Layout";
import { CssBaseline, ThemeProvider, Typography } from "@mui/material";
import "./App.css";
import Login from "./containers/Login";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Register from "./containers/Register";
import Home from "./containers/Home";
import useAxios from "./hooks/useAxios";
import NewsPage from "./containers/NewsPage";
import NotFound from "./containers/NotFound";
import ProtectedComponent from "./components/ProtectedComponent";
import SearchPage from "./containers/SearchPage";

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Home />{" "}
                </Layout>
              }
            />
            <Route
              path="/detail/:tahun/:bulan/:tanggal/:judul"
              element={
                <ProtectedComponent>
                  <Layout>
                    <NewsPage />
                  </Layout>
                </ProtectedComponent>
              }
            />
            <Route path="login" element={<Login />} />
            <Route
              path="search/:query"
              element={
                <Layout>
                  <SearchPage />
                </Layout>
              }
            />
            <Route
              path="search"
              element={
                <Layout>
                  <SearchPage />
                </Layout>
              }
            />

            <Route path="register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}
