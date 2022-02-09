import { Box, Image, Center, useMediaQuery } from '@chakra-ui/react';
import daosquare from '../../assets/images/daosquare.svg';
import '../../assets/animate.min.css';
import './index.css';

function Home() {
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Box
        className="wrapper-lg"
        display={isMobile ? 'none' : 'block'}
        pt="80px"
        marginX="-8px"
      >
        <Box position="relative">
          <Box className="title-big animated bounceInDown">
            YOUTH EXPLORE WEB3
          </Box>
          <Box
            className="animated bounceInRight delay-1s"
            fontSize="18px"
            lineHeight="124%"
            position="absolute"
            bottom={5}
            right={0}
            width="54%"
            textAlign="right"
          >
            We believe in Web3 because it allows us to become our true selves
            that are the so-call "sovereign individuals”.
          </Box>
        </Box>

        <Box position="relative" mt={2}>
          <Box className="title-big last-right animated bounceInUp">
            <Image
              src={daosquare}
              display="inline-block"
              width="72px"
              mr={8}
              pos="relative"
              top="6px"
            />
            FIND FRIENDS IN DAO
          </Box>
          <Box
            className="animated bounceInLeft delay-1s"
            fontSize="18px"
            lineHeight="124%"
            position="absolute"
            bottom={5}
            left={0}
            width="50%"
          >
            We believe in DAO because it leads us to find those like-minded
            people and realise each other's dreams together.
          </Box>
        </Box>
      </Box>

      <Box className="wrapper-sm" display={isMobile ? 'block' : 'none'} mt={5}>
        <Box position="relative">
          <Box className="title-big animated bounceInDown" maxW="280px">
            YOUTH EXPLORE EWEB3
          </Box>
          <Box
            className="animated bounceInRight delay-1s"
            fontSize={{ base: '12px', sm: '14px' }}
            lineHeight={{ base: '14.4px', sm: '18px' }}
            position="absolute"
            bottom={0}
            right={0}
            width="40%"
            textAlign="right"
          >
            We believe in Web3 because it allows us to become our true selves
            that are the so-call "sovereign individuals”.
          </Box>
        </Box>
        <Center>
          <Image src={daosquare} display="inline-block" width="60px" my={4} />
        </Center>
        <Box position="relative">
          <Box
            className="title-big last-right animated bounceInUp"
            textAlign="right"
            maxW="260px"
            pos="absolute"
            right={0}
          >
            FIND FRIENDS IN DAO
          </Box>

          <Box
            className="animated bounceInLeft delay-1s"
            fontSize={{ base: '12px', sm: '14px' }}
            lineHeight={{ base: '14.4px', sm: '18px' }}
            position="absolute"
            bottom="-80px"
            left={0}
            width="46%"
          >
            We believe in DAO because it leads us to find those like-minded
            people and realise each other's dreams together.
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Home;
