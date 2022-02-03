import {
  Box,
  Flex,
  Text,
  Heading,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import IconCard from '../../components/iconCard';
import NFTCard from '../../components/nftCard';

import passport from '../../assets/images/passport.png';
import guild from '../../assets/images/guild.png';
import cafe from '../../assets/images/cafeteria.png';
import matrix from '../../assets/images/matrix.png';
import daosquare from '../../assets/images/daosquare.svg';
import uniswap from '../../assets/images/uniswap.svg';
import swapr from '../../assets/images/swapr.svg';

const nftData = [
  {
    image: passport,
    title: 'PASSPORT',
    text: 'Basic membership',
  },
  {
    image: guild,
    title: 'GUILD',
    text: 'Guild membership',
  },
  {
    image: cafe,
    title: 'CAFETERIA',
    text: 'Cafeteria membership',
  },
  {
    image: matrix,
    title: 'MATRIX',
    text: 'Matrix membership',
  },
];
const data = [
  {
    icon: daosquare,
    title: 'Ethereum',
    text: '$RICE',
  },
  {
    icon: daosquare,
    title: 'GnosisChain',
    text: '$RICE',
  },
];
const data1 = [
  {
    icon: uniswap,
    title: 'Uniswap',
    text: 'Ethereum',
  },
  {
    icon: swapr,
    title: 'Swapr',
    text: 'GnosisChain',
  },
];

function Join() {
  return (
    <Box fontSize="20px" lineHeight="36px">
      <Heading as="h1" fontSize="44px" textAlign="center" my={9}>
        Membership
      </Heading>
      <Text my={9}>
        These membership NFTs are your right to join and live in DAOSquare. The
        access mechanism is based on the DKP (DAO Contribution Protocol). They
        are completely open and can be earned autonomously by any community
        contributor.
      </Text>
      <Flex wrap="wrap" justifyContent="space-between">
        {nftData.map(d => (
          <Box w="48%" mb={12}>
            <NFTCard {...d} />
          </Box>
        ))}
      </Flex>
      <Text my={9}>
        You need some DKP (on-chain points) and some $RICE to get these NFTs.
      </Text>
      <Text my={9}>
        DKP.land is a DAO contribution protocol. It allows community members to
        quantify their contributions as on-chain points and earn memberships
        (including benefits and governance) through various combinations of
        points. This is also our thinking about governance. Basically, we need
        to consider more contribution factors than simply holding Token.
      </Text>

      <Heading as="h2" fontSize="24px" mt={10} mb={6}>
        Earn DKP
      </Heading>
      <UnorderedList>
        <ListItem>
          Keep eyes on #contibution in Discord to engage in tasks. Or, submit
          your community suggestion task. (DKP3, DKP4)
        </ListItem>
        <ListItem>
          Join Radio Party each saturday in Discord. (DKP3, DKP4)
        </ListItem>
        <ListItem>
          Submit your proposal in forum.daosquare.io (DKP3,DKP4)
        </ListItem>
        <ListItem>Stake your $RICE in DKP2 pool. (DKP2)</ListItem>
        <ListItem>Other events. (DKP3, DKP4)</ListItem>
      </UnorderedList>

      <Heading as="h2" fontSize="24px" mt={10} mb={6}>
        Get $RICE
      </Heading>
      <UnorderedList>
        <ListItem>
          Buy on Uniswap(mainnet), Swapr(GnosisChain), Gate.io, FT
        </ListItem>
        <ListItem>Join Radio Party each saturday in Discord.</ListItem>
        <ListItem>Submit your proposal in forum.daosquare.io</ListItem>
        <ListItem>Engage in tasks in community or guild</ListItem>
        <ListItem>Other events.</ListItem>
      </UnorderedList>

      <Heading as="h2" fontSize="24px" mt={10} mb={6}>
        Add $RICE in your Metamask
      </Heading>
      <Flex wrap="wrap">
        {data.map(d => (
          <Box w="40%" mr={6} mb={4}>
            <IconCard {...d} />
          </Box>
        ))}
      </Flex>

      <Heading as="h2" fontSize="24px" mt={10} mb={6}>
        $RICE on Dex
      </Heading>
      <Flex wrap="wrap">
        {data1.map(d => (
          <Box w="40%" mr={6} mb={4}>
            <IconCard {...d} />
          </Box>
        ))}
      </Flex>

      <Box h={20}></Box>
    </Box>
  );
}

export default Join;
