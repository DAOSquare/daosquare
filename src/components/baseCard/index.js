import { Box } from '@chakra-ui/react';

function BaseCard({ children, ...props }) {
  return (
    <Box bg="#fff" borderRadius="10px" px={5} py={7} {...props}>
      {children}
    </Box>
  );
}

export default BaseCard;
