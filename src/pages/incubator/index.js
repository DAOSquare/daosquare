import { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Text,
  Heading,
  Center,
  Container,
  Image,
} from '@chakra-ui/react';
import BaseCard from '../../components/baseCard';
import IconCard from '../../components/iconCard';
import InfoCard from '../../components/infoCard';

import nft4ever from '../../assets/images/nft4ever.svg';
import incub1 from '../../assets/images/incub1.svg';
import incub2 from '../../assets/images/incub2.svg';
import venture from '../../assets/images/venture.svg';
import vesting from '../../assets/images/vesting.svg';
import saft from '../../assets/images/saft.svg';
import whaledao from '../../assets/images/whaledao1.svg';
import dkp from '../../assets/images/dkp1.svg';
import circle from '../../assets/images/circle.png';

const infoData = [
  {
    icon: incub1,
    title: 'Infrastructures of Incubator',
    text: 'The design philosophy of DAOSquare incubator is to build a series of trustless collaborative protocols to serve investment,  fundingraise, and resource coordination, including Venture DAO frameworks, vesting, SAFT, task, talent pool, reputation and more.',
    link: '/',
  },
  {
    icon: incub2,
    title: 'Community',
    text: 'Anyone can join DAOSquare community as a contributor/startup founder/investor/service provider to co-build and strenghen a interaction network, and the same time benefit frome this.',
    link: '/',
  },
];
const data = [
  {
    icon: venture,
    title: 'Ventures',
    text: 'Framework',
  },
  {
    icon: vesting,
    title: 'Vesting',
    text: 'Protocol',
  },
  {
    icon: saft,
    title: 'SAFT',
    text: 'Protocol',
  },
  {
    icon: nft4ever,
    title: 'NFT4ever',
    text: 'Equity marketplace',
  },
];
const data1 = [
  {
    icon: whaledao,
    title: 'WhaleDAO',
    text: 'Marketing',
  },
  {
    icon: dkp,
    title: 'DKP',
    text: 'Community Operation',
  },
];

function Incubator() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isHover, setIsHover] = useState(false);
  // const graphWidth = useBreakpointValue({
  //   base: 300,
  //   md: 440,
  //   lg: 640,
  // });

  return (
    <Box>
      <Center
        mt={{ base: 5, md: 10, lg: '60px' }}
        mb={{ base: 4, md: 6, lg: 10 }}
      >
        <Image src={circle} />
      </Center>

      <Container
        maxW="container.md"
        fontSize={{ base: '16px', md: '24px' }}
        fontWeight={900}
        textAlign="center"
        mb={{ base: 10, md: 16, lg: '100px' }}
      >
        Build a interaction network for DAOSquare community to benefits all
        participants
      </Container>

      <Flex wrap="wrap" justifyContent="space-between" mb={12}>
        {infoData.map((d, i) => (
          <Box key={i} w={{ base: '100%', md: '49%' }} mb={{ base: 4, md: 0 }}>
            <InfoCard {...d} />
          </Box>
        ))}
      </Flex>

      <Text as="h3" fontSize="14px" color="#4C4B63" mb={2} mt={10}>
        VentureDAOs
      </Text>
      <BaseCard
        px={{ base: 6, md: '100px', lg: '280px' }}
        py={{ base: 10, md: '80px', lg: '160px' }}
        background="linear-gradient(107.76deg, rgba(255, 150, 213, 0.8) 0.7%, rgba(255, 211, 144, 0.8) 99.85%)"
        backdropFilter="blur(40px)"
      >
        <Heading
          fontSize={{ base: '30px', md: '38px', lg: '48px' }}
          fontWeight={400}
          textAlign="center"
          mb={5}
        >
          Coming soon
        </Heading>
        <Text fontSize="20px" textAlign="center">
          Launch a DAO for your institution/community using the rich types
          (Rolling, SPV, Funds, Moloch) to run for private placements, public
          offerings, DeFi, etc.
        </Text>
      </BaseCard>

      <Text as="h3" fontSize="14px" color="#4C4B63" mb={2} mt={10}>
        Components
      </Text>
      <Flex wrap="wrap" justifyContent="space-between">
        {data.map((d, i) => (
          <Box key={i} w={{ base: '100%', md: '49%', lg: '23.5%' }} mb={6}>
            <IconCard {...d} />
          </Box>
        ))}
      </Flex>
      <Text as="h3" fontSize="14px" color="#4C4B63" mb={2} mt={10}>
        Service Providers
      </Text>
      <Flex wrap="wrap" justifyContent="space-between">
        {data1.map((d, i) => (
          <Box key={i} w={{ base: '100%', md: '49%', lg: '23.5%' }} mb={6}>
            <IconCard {...d} />
          </Box>
        ))}
        <Box
          w={{ base: '100%', md: '49%', lg: '23.5%' }}
          pos="relative"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <BaseCard position="relative" textAlign="center" px={0}>
            <Box fontSize="22px" fontWeight={600} py="14px">
              Become a provider
            </Box>
            <Box
              position="absolute"
              w="100%"
              h={isHover ? '100%' : '0px'}
              bottom={0}
              left={0}
              background="rgba(230, 235, 255, 0.9)"
              backdropFilter="blur(40px)"
              transition="height .4s cubic-bezier(0, 1, 0.5, 1)"
            >
              <Box pt="44px">Coming soon</Box>
            </Box>
          </BaseCard>
        </Box>
        <Box w={{ base: '100%', md: '49%', lg: '23.5%' }} mb={6}>
          <BaseCard visibility="hidden" />
        </Box>
      </Flex>

      <Box h={{ base: 8, md: 16, lg: 32 }}></Box>
    </Box>
  );
}

export default Incubator;
