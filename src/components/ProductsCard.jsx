import {
  Grid,
  Card,
  Typography,
  Button,
  CardContent,
  Box,
  Stack,
} from "@mui/material";
import { fetchData } from "../ulti/fetchData";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import { TailSpin } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/cardSlice";

const ProductsCard = () => {
  const dispatch = useDispatch();

  const { status, data } = useQuery(
    "products",
    () => fetchData("https://fakestoreapi.com/products"),
    { keepPreviousData: true }
  );

  if (status === "loading") {
    return (
      <Box sx={{ margin: "auto", marginTop: "1rem" }}>
        <TailSpin
          height="100"
          width="100"
          color="#566572"
          ariaLabel="loading"
        />
      </Box>
    );
  }

  return data.map((product) => (
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
          <Typography variant="subtitle2" color="text.secondary">
            {product.description.slice(0, 30)}
          </Typography>
          <Typography variant="subtitle2">Price - ${product.price}</Typography>
        </CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Button
            size="small"
            variant="contained"
            sx={{ backgroundColor: "#566572" }}
            onClick={() =>
              dispatch(addCart({ ...product, qty: 1, total: product.price }))
            }
          >
            Cart
          </Button>
          <Link to={`/product/${product.id}`} style={{ marginLeft: "5px" }}>
            <Button size="small">Detail</Button>
          </Link>
        </Stack>
      </Card>
    </Grid>
  ));
};

export default ProductsCard;
