import { Stack, Container, Box } from "@mui/material";
import { BiHome, BiCategory, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        paddingY: "15px",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Container>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Link to="/">
            <BiHome size={35} color="#566572" />
          </Link>
          <Link to="categories">
            <BiCategory size={35} color="#566572" />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
