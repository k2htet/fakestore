import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Box, Container, Typography, Stack, Button } from "@mui/material";
import { fetchData } from "../ulti/fetchData";
import { TailSpin } from "react-loader-spinner";
import { addCart } from "../redux/cardSlice";
import { useDispatch } from "react-redux";

const Detail = () => {
  const { productId } = useParams();

  const { data, status } = useQuery(
    `product${productId}`,
    () => fetchData(`https://fakestoreapi.com/products/${productId}`),
    {
      keepPreviousData: true,
    }
  );

  const dispatch = useDispatch();

  if (status === "loading") {
    return (
      <Stack
        width="100%"
        height="100vh"
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

  if (status === "error") {
    return <span>Error....</span>;
  }

  return (
    <Box sx={{ minHeight: "100vh", marginY: "4.5rem" }}>
      <Container>
        <Box>
          <Box backgroundColor="#fff" borderRadius="5px" p="15px" my={5}>
            <Box
              sx={{
                width: "250px",
                height: "250px",
                margin: "auto",
                borderRadius: "5px",
              }}
            >
              <img
                src={data.image}
                alt={data.id}
                width="100%"
                height="100%"
                style={{ borderRadius: "5px" }}
              />
            </Box>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mt={3}
              spacing={3}
            >
              <Typography variant="subtitle1" color="#566572">
                Name-
              </Typography>
              <Typography variant="subtitle2" color="#566572">
                {data.title}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={3}
              mt={3}
            >
              <Typography variant="subtitle1" color="#566572">
                Price-
              </Typography>
              <Typography variant="subtitle1" color="#566572">
                ${data.price}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={3}
              mt={3}
            >
              <Typography variant="subtitle1" color="#566572">
                Description-
              </Typography>
              <Typography variant="subtitle2" color="#566572">
                {data.description}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={3}
              mt={3}
            >
              <Typography variant="subtitle1" color="#566572">
                Category-
              </Typography>
              <Typography variant="subtitle2" color="#566572">
                {data.category}
              </Typography>
            </Stack>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={3}
              mt={3}
            >
              <Typography variant="subtitle1" color="#566572">
                Rating-
              </Typography>
              <Typography variant="subtitle2" color="#566572">
                {data.rating.rate} / 5
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={3}
              mt={3}
            >
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() =>
                  dispatch(addCart({ ...data, qty: 1, total: data.price }))
                }
              >
                add to card
              </Button>
              <Button variant="contained" color="error" size="small">
                Buy Now
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Detail;
