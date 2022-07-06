import { Container, Typography, Box, Grid } from "@mui/material";

import { Caro, ProductsCard } from "../components";

const Home = () => {
  return (
    <Box sx={{ minHeight: "100vh", marginY: "4.5rem" }}>
      <Container>
        <Box
          sx={{
            marginTop: { xs: "4.5rem", sm: "4.5rem", md: "6rem", lg: "5rem" },
            width: { xs: "100%", sm: "100%", md: "75%" },
            margin: { md: "auto" },
          }}
        >
          <Caro />
        </Box>
        <Box sx={{ my: "1rem", color: "#566572" }}>
          <Typography variant="h5">All Product</Typography>
        </Box>
        <Grid container spacing={3}>
          <ProductsCard />
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
