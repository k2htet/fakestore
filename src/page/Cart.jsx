import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import {
  decrementQty,
  incrementQty,
  removeCartItem,
  cleanCartItem,
} from "../redux/cardSlice";
import { useNavigate } from "react-router-dom";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        position: "relative",
      }}
    >
      <Box width="100px" height="100px" my={3}>
        <img
          src={item.image}
          alt={item.title}
          width="100%"
          height="100%"
          style={{
            borderRadius: "100%",
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </Box>
      <Box>
        <Typography variant="subtitle1">{item.title.slice(0, 20)}</Typography>
        <Typography variant="subtitle1">${item.price}</Typography>
      </Box>
      <Stack direction="row" alignItems="center" justifyContent="flex-start">
        <IconButton
          variant="contained"
          color="warning"
          size="small"
          onClick={() => dispatch(decrementQty(item.id))}
          disabled={item.qty === 1}
        >
          <Remove fontSize="14px" />
        </IconButton>
        <Typography variant="body2" component="span">
          {item.qty}
        </Typography>
        <IconButton
          variant="contained"
          color="primary"
          size="small"
          disabled={item.qty === 10}
          onClick={() => dispatch(incrementQty(item.id))}
        >
          <AddIcon fontSize="14px" />
        </IconButton>
      </Stack>

      <IconButton
        color="error"
        size="small"
        sx={{ position: "absolute", top: 0, right: 0, zIndex: 1 }}
        onClick={() => dispatch(removeCartItem(item.id))}
      >
        <ClearIcon fontSize="16px" />
      </IconButton>
    </Stack>
  );
};

const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.cartItem);

  let total = cartItem.map((item) => item.total);
  total = total.reduce((a, b) => a + b, 0);
  const navigate = useNavigate();

  const handleClick = () => {
    alert("Order Successful");
    dispatch(cleanCartItem());
    navigate("/", { replace: true });
  };
  return (
    <Box sx={{ minHeight: "100vh", marginY: "4.5rem" }}>
      <Container>
        <Typography variant="h4" color="#566572">
          Your Cart
        </Typography>
        <Box>
          <Box backgroundColor="#fff" borderRadius="5px" p="15px" my={3}>
            {cartItem.length > 0 ? (
              <Box>
                {cartItem.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
                <Stack
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  spacing={3}
                  my={2}
                >
                  <Typography variant="subtitle1">Total:</Typography>
                  <Typography variant="subtitle2">
                    ${Math.ceil(total)}
                  </Typography>
                  <Stack spacing={2}>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={handleClick}
                    >
                      Check Out
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            ) : (
              <Typography variant="h5" textAlign="center" my={10} color="error">
                Empty Cart
              </Typography>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Cart;
