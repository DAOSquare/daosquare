import { Box } from '@chakra-ui/react';

function BaseCard({ children, ...props }) {
  return (
    <Box
      bg="#fff"
      borderRadius="10px"
      px={5}
      py={7}
      overflow="hidden"
      background="rgb(255,255,255,.8)"
      {...props}
    >
      {children}
    </Box>
  );
}

export default BaseCard;
