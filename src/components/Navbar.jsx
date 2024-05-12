import { Box, Flex, Link } from "@chakra-ui/react";
import { FaHome, FaUser, FaInfoCircle } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1rem" bg="brand.800" color="white" boxShadow="md" borderRadius="md">
      <Box>
        <Link as={RouterLink} to="/" leftIcon={<FaHome />} px={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/about" leftIcon={<FaInfoCircle />} px={2}>
          About
        </Link>
        <Link as={RouterLink} to="/profile" leftIcon={<FaUser />} px={2}>
          Profile
        </Link>
      </Box>
    </Flex>
  );
}

export default Navbar;
