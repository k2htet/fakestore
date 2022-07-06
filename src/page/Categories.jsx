import {
  Grid,
  Card,
  Typography,
  Button,
  CardContent,
  Box,
  Stack,
  Container,
} from "@mui/material";

import { useQueries } from "react-query";
import { TailSpin } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/cardSlice";
import { fetchData } from "../ulti/fetchData";
import { Link } from "react-router-dom";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const categoriesQueries = useQueries(
    categories.map((category) => {
      return {
        queryKey: ["category", category],
        queryFn: () =>
          fetchData(`https://fakestoreapi.com/products/category/${category}`),
      };
    })
  );
  const lastIndex = categoriesQueries.length - 1;

  if (categoriesQueries[lastIndex].status === "loading") {
    return (
      <Stack
        sx={{ height: "100vh" }}
        justifyContent="center"
        alignItems="center"
      >
        <TailSpin
          height="100"
          width="100"
          color="#566572"
          ariaLabel="loading"
        />
      </Stack>
    );
  }

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
          <Typography variant="h3" color="#566572" textAlign="center">
            Categories
          </Typography>

          {categoriesQueries &&
            categoriesQueries.map((category, index) => (
              <Box key={index + "cate"}>
                <Typography variant="h4" color="#566572" mt={4} mb={1}>
                  {category.data[index].category}
                </Typography>
                <Grid container spacing={3}>
                  {category.data.map((product) => (
                    <Grid item xs={6} sm={6} md={4} key={product.id}>
                      <Card sx={{ maxWidth: 345, padding: "20px" }}>
                        <Box width="100%" height="150px">
                          <img
                            src={product.image}
                            alt={product.id}
                            width="100%"
                            height="100%"
                            loading="lazy"
                            style={{ objectFit: "contain" }}
                          />
                        </Box>
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="body1"
                            component="div"
                            sx={{ textALign: "center" }}
                          >
                            {product.title.slice(0, 20)}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            color="text.secondary"
                          >
                            {product.description.slice(0, 30)}
                          </Typography>
                          <Typography variant="subtitle2">
                            Price - ${product.price}
                          </Typography>
                        </CardContent>
                        <Stack direction="row" justifyContent="space-between">
                          <Button
                            size="small"
                            variant="contained"
                            sx={{ backgroundColor: "#566572" }}
                            onClick={() =>
                              dispatch(
                                addCart({
                                  ...product,
                                  qty: 1,
                                  total: product.price,
                                })
                              )
                            }
                          >
                            Cart
                          </Button>
                          <Link
                            to={`/product/${product.id}`}
                            style={{ marginLeft: "5px" }}
                          >
                            <Button size="small">Detail</Button>
                          </Link>
                        </Stack>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Categories;
