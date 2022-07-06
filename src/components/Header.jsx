import { Stack, Container, Typography, Box, Badge } from "@mui/material";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const totalCart = useSelector((state) => state.cart.totalCart);
  return (
    <Box
      sx={{
        backgroundColor: "#F5f5f5",
        paddingY: "0.7rem",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: "2",
      }}
    >
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link to="/">
            <Typography variant="h5" color="#566572">
              KK Store
            </Typography>
          </Link>

          <Link to="/cart">
            <Badge badgeContent={totalCart} color="error">
              <AiOutlineShoppingCart size={35} color="#566572" />
            </Badge>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
