import { Box, Image } from '@chakra-ui/react';
import daosquare from '../../assets/images/daosquare.svg';
import './index.css';

function Home() {
  return (
    <Box pt="80px">
      <Box position="relative">
        <Box className="title-big">YOUTH EXPLOR WEB3</Box>
        <Box
          fontSize="18px"
          lineHeight="124%"
          position="absolute"
          bottom={5}
          right={0}
          width="60%"
        >
          Simplify your integration using Stripe Checkou. It dynamically adapts
          to your customer’s devic and location adapts to your customer’s devic
        </Box>
      </Box>

      <Box position="relative" mt={2}>
        <Box className="title-big last-right">
          <Image src={daosquare} display="inline" width="70px" mr={4} />
          FIND FRIENDS IN DAO
        </Box>
        <Box
          fontSize="18px"
          lineHeight="124%"
          position="absolute"
          bottom={5}
          left={0}
          width="54%"
        >
          Simplify your integration using Stripe Checkout. It dynamically adapts
          to your customer’s device and location to incre
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
