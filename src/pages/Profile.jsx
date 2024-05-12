import { Box, Text } from '@chakra-ui/react';

function Profile() {
  return (
    <Box p={4}>
      <Text fontSize="xl">Your Profile</Text>
      <Text mt={2}>
        Manage your profile information and settings here.
      </Text>
    </Box>
  );
}

export default Profile;