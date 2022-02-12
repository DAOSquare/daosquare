import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Box,
  Container,
  Flex,
  Text,
  Image,
  Link,
  Button,
} from '@chakra-ui/react';
import dao2 from '../../assets/images/dao22.svg';
import devil from '../../assets/images/devil2.svg';
import cafeteria from '../../assets/images/cafeteria2.svg';
import matrix from '../../assets/images/matrix2.svg';
import whaledao from '../../assets/images/whaledao2.svg';
import discord from '../../assets/images/discord1.svg';
import dework from '../../assets/images/dework1.svg';
import forum from '../../assets/images/forum1.svg';
import twitter from '../../assets/images/twitter1.svg';
import back from '../../assets/images/back.svg';

const guildData = [
  {
    name: 'dao2',
    logo: dao2,
    text: 'Discover the cool organizations, projects, people, and stories in the DAO space and introduce them to more people.',
  },
  {
    name: 'DevilGuild',
    logo: devil,
    text: 'A guild of product builders in DAOSquare community, including developers, product managers, designers and other roles. The goal of DevilGuild is help more developers join crypto space and help them learn and work together in crypto space. Also, they will be the builders of DAOSquare.',
  },
  {
    name: 'Cafeteria',
    logo: cafeteria,
    text: 'The governance unit of the DAOSquare community. It is currently in the experimental stage and it will gradually become the governance hub of DAOSquare.',
  },
  {
    name: 'Matrix',
    logo: matrix,
    text: 'Full-time group dedicated to advancing the development of DAOSquare (especially in the early stages). This includes product development, investment research, and community operations, etc.',
  },
  {
    name: 'WhaleDAO',
    logo: whaledao,
    text: 'Discover the next whales and help them to rise. WhaleDAO is a Sub-DAO in DAOSquare community. Its clients include Aragon, Terra, API3, BrightID and Ceramic.',
  },
];

function Guild() {
  let [data, setData] = useState(guildData[0]);
  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    let name = location.hash.substring(1) || 'dao2';
    let filterData = guildData.filter(
      d => d.name.toLowerCase() === name.toLowerCase()
    );
    setData(filterData.length > 0 ? filterData[0] : guildData[0]);
  }, [location]);

  return (
    <Box>
      <Container
        maxW="container.lg"
        p={0}
        pt={{ base: 5, md: '128px' }}
        mb={{ base: '40px', md: '80px', lg: '120px' }}
        overflow="auto"
        pos="relative"
      >
        <Link
          href="/landscape"
          pos="absolute"
          left={5}
          top={{ base: '20px', md: '60px', lg: '80px' }}
        >
          <Image src={back} />
        </Link>

        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          alignItems="center"
          className="article"
        >
          <Box w="20%">
            <Image src={data.logo} width="140px" />
          </Box>
          <Box w="80%">
            <Box
              fontSize={{ base: '30px', md: '38px', lg: '48px' }}
              textAlign={{ base: 'center', md: 'left' }}
            >
              {data.name}
            </Box>
            <Text>{data.text}</Text>
            <Flex justifyContent={{ base: 'center', md: 'left' }} mt={8}>
              <Link
                href="https://discord.com/invite/daosquare"
                isExternal
                mx={4}
                w={5}
              >
                <Image src={discord} w={5} />
              </Link>
              <Link
                href="https://twitter.com/DAOSquare"
                isExternal
                mx={4}
                w={5}
              >
                <Image src={twitter} w={5} />
              </Link>
              <Link
                href="https://app.dework.xyz/o/daosquare-5T2WcpGDJ3m6cOiG5ItJeL"
                isExternal
                mx={4}
                w={5}
              >
                <Image src={dework} w={4} />
              </Link>
              <Link href="https://forum.daosquare.io/" isExternal mx={4} w={5}>
                <Image src={forum} w="18px" />
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Container>

      <Box textAlign="center" mt={{ base: 8, md: 16, lg: 32 }}>
        <Link href="/join">
          <Button>Join us</Button>
        </Link>
      </Box>
    </Box>
  );
}

export default Guild;
