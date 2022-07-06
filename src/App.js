import React from "react";
import { Header, Navbar } from "./components";
import { Cart, Home, Categories, Detail } from "./page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Stack } from "@mui/material";

const App = () => {
  return (
    <Router>
      <Stack
        direction="column"
        sx={{ minHeight: "100vh", position: "relative" }}
      >
        <Header />
        <Box>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:productId" element={<Detail />} />
          </Routes>
        </Box>
      </Stack>

      <Navbar />
    </Router>
  );
};

export default App;
