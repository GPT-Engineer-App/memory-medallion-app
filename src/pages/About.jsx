import { Box, Text } from '@chakra-ui/react';

function About() {
  return (
    <Box p={4}>
      <Text fontSize="xl">About Us</Text>
      <Text mt={2}>
        Welcome to our website. Here you can find information about our mission, vision, and the services we offer.
      </Text>
    </Box>
  );
}

export default About;