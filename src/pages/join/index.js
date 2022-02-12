import { useEffect } from 'react';
import {
  Box,
  Flex,
  Text,
  Heading,
  ListItem,
  UnorderedList,
  Link,
} from '@chakra-ui/react';
import IconCard from '../../components/iconCard';
import NFTCard from '../../components/nftCard';

import passport from '../../assets/images/passport.svg';
import guild from '../../assets/images/guild.svg';
import cafe from '../../assets/images/cafeteria.svg';
import matrix from '../../assets/images/matrix.svg';
import daosquare from '../../assets/images/daosquare.svg';
import uniswap from '../../assets/images/uniswap.svg';
import swapr from '../../assets/images/swapr.svg';

const nftData = [
  {
    bg: '#FBFF00',
    image: passport,
    title: 'PASSPORT',
    text: 'Basic membership',
    info: 'Passport is passport to access DAOSquare, you can get all opportunities including investment, learnning,  events, community benefits.',

    energy: [
      'Full access rights of Passport.',
      'Be a Guild member to participate in EVERY guilds in DAOSquare community. Learn and earn.',
    ],
    requirement: [
      '100 $RICE staked in DKP2 pool',
      '2 DKP1 to burn',
      '10 DKP2 to burn',
      '5 DKP3 to burn',
    ],
    visa: '1 month',
  },
  {
    bg: '#83FFD7',
    image: guild,
    title: 'GUILD',
    text: 'Guild membership',
    info: 'Guild allow you to join every guilds in DAOSquare community, become a member, learn together, work together, earn together and enjoy together.',
    energy: [
      'Full access rights of Passport.',
      'Be a Guild member to participate in EVERY guilds in DAOSquare community. Learn and earn.',
    ],
    requirement: [
      '100 $RICE staked in DKP2 pool',
      '2 DKP1 to burn',
      '10 DKP2 to burn',
      '5 DKP3 to burn',
    ],
    visa: '1 month',
  },
  {
    bg: '#FF59BE',
    image: cafe,
    title: 'CAFETERIA',
    text: 'Cafeteria membership',
    info: 'Cafeteria allow you to get the governance rights for DAOSquare community. It will gradually become the governance hub of DAOSquare.',
    energy: [
      'Full access rights of Guild.',
      'Be a Cafeteria member to participate in the governance of DAOSquare community.',
    ],
    requirement: [
      '2000 $RICE staked in DKP2 pool',
      '10 DKP1 to burn',
      '100 DKP2 to burn',
      '20 DKP3 to burn',
    ],
    visa: '1 month',
  },
  {
    bg: '#A096D1',
    image: matrix,
    title: 'MATRIX',
    text: 'Matrix membership',
    info: 'Matrix is the full-time guild that promotes the development of DAOSquare in the early stage. It includes products, operation, strategy, and more.',
    energy: [
      'Be a Matrix member to participate in the buiding for the projects and operations of DAOSquare as full-time.',
    ],
    requirement: [
      'Be a volunteer to do some contribution in community as matching role.',
      'Pass the Matrix interview.',
      'Pass 3 months internship.',
    ],
    visa: '1 month',
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
    link: 'https://app.uniswap.org/#/swap?inputCurrency=0xdac17f958d2ee523a2206206994597c13d831ec7&outputCurrency=0xbd9908b0cdd50386f92efcc8e1d71766c2782df0&chain=mainnet',
  },
  {
    icon: swapr,
    title: 'Swapr',
    text: 'GnosisChain',
    link: 'https://swapr.eth.link/#/swap?inputCurrency=0xe91d153e0b41518a2ce8dd3d7944fa863463a97d&outputCurrency=0x97edc0e345fbbbd8460847fcfa3bc2a13bf8641f&chainId=100',
  },
];

function Join() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function addRiceToMetamask() {
    initialize();
  }

  const initialize = async () => {
    const MetaMaskClientCheck = () => {
      //Now we check to see if MetaMask is installed
      if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
      } else {
        alert('MetaMask isnt installed!');
      }
    };
    MetaMaskClientCheck();
    const networkID = await window.ethereum.request({ method: 'net_version' });
    console.log(networkID);
    let riceAddress = '0xbd9908b0cdd50386f92efcc8e1d71766c2782df0';
    if (networkID === 1) {
      riceAddress = '0xbd9908b0cdd50386f92efcc8e1d71766c2782df0';
    } else if (networkID === 100) {
      riceAddress = '0x97Edc0e345FbBBd8460847Fcfa3bc2a13bF8641F';
    } else {
      alert('Please switch to ethereum or XDai network');
      return;
    }
    window.ethereum
      .request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: riceAddress,
            symbol: 'RICE',
            decimals: 18,
            image: 'https://www.daosquare.io/mediakit/DAOSquareRICE-256.png',
          },
        },
      })
      .then(success => {
        if (success) {
          console.log('RICE successfully added to wallet!');
        } else {
          throw new Error('Something went wrong.');
        }
      })
      .catch(console.error);
  };

  return (
    <Box className="article">
      <Heading
        as="h1"
        textAlign="center"
        fontSize={{ base: '30px', md: '34px', lg: '44px' }}
        my={{ base: 4, md: 6, lg: 10 }}
      >
        Membership
      </Heading>
      <Text>
        These membership NFTs are your right to join and live in DAOSquare. The
        access mechanism is based on the DKP (DAO Contribution Protocol). You
        need some DKPs (on-chain points) and $RICE to get these NFTs.
      </Text>
      <Flex
        wrap="wrap"
        justifyContent={{ base: 'center', md: 'space-between' }}
      >
        {nftData.map((d, i) => (
          <Box
            key={i}
            w={{ base: '100%', md: '48%' }}
            maxW="380px"
            mb={{ base: 4, md: 12 }}
          >
            <NFTCard {...d} />
          </Box>
        ))}
      </Flex>
      <Text>
        DKP is a DAO contribution protocol. It allows anyone to quantify their
        community contributions as DKP and earn memberships through various
        combinations of DKPs. It’s completely open and can be earned
        autonomously by anyone. It’s also our thinking about DAO/community
        governance. Basically, we need to consider more contribution factors
        than simply holding token.
      </Text>

      <Heading as="h2" fontSize="24px" mt={10} mb={6}>
        Earn DKP
      </Heading>
      <UnorderedList>
        <ListItem>
          Keep eyes on #contibution in Discord to engage in tasks. Or, submit
          your community suggestion task to earn DKP3, DKP4
        </ListItem>
        <ListItem>
          Join Radio Party each saturday in Discord to earn DKP3, DKP4
        </ListItem>
        <ListItem>
          Submit your proposal in{' '}
          <Link
            href="https://forum.daosquare.io/"
            target="_blank"
            color="#5B93FF"
          >
            forum.daosquare.io
          </Link>{' '}
          to earn DKP3, DKP4
        </ListItem>
        <ListItem>Stake your $RICE in DKP2 pool to earn DKP2</ListItem>
        <ListItem>
          Donate WXDAI to our public good grant funds to earn DKP1
        </ListItem>
        <ListItem>Other events to earn DKP3, DKP4</ListItem>
      </UnorderedList>

      <Heading as="h2" fontSize="24px" mt={10} mb={6}>
        Get $RICE
      </Heading>
      <UnorderedList>
        <ListItem>
          Buy on Uniswap(mainnet), Swapr(GnosisChain), Gate.io
        </ListItem>
        <ListItem>Join Radio Party each saturday in Discord</ListItem>
        <ListItem>
          Submit your proposal in{' '}
          <Link
            href="https://forum.daosquare.io/"
            target="_blank"
            color="#5B93FF"
          >
            forum.daosquare.io
          </Link>
        </ListItem>
        <ListItem>Engage in tasks in community or guild</ListItem>
        <ListItem>Other events</ListItem>
      </UnorderedList>

      <Heading as="h2" fontSize="24px" mt={10} mb={6}>
        Add $RICE in your Metamask
      </Heading>
      <Flex wrap="wrap" justifyContent={{ base: 'center', md: 'left' }}>
        {data.map((d, i) => (
          <Box
            key={i}
            w={{ base: '100%', md: '40%' }}
            maxW="356px"
            mr={{ base: 0, md: 6 }}
            mb={4}
          >
            <IconCard
              {...d}
              className="click-card"
              onClick={() => {
                addRiceToMetamask();
              }}
            />
          </Box>
        ))}
      </Flex>

      <Heading as="h2" fontSize="24px" mt={10} mb={6}>
        $RICE on Dex
      </Heading>
      <Flex wrap="wrap" justifyContent={{ base: 'center', md: 'left' }}>
        {data1.map((d, i) => (
          <Box
            key={i}
            w={{ base: '100%', md: '40%' }}
            maxW="356px"
            mr={{ base: 0, md: 6 }}
            mb={4}
          >
            <Link href={d.link} target="_blank">
              <IconCard {...d} className="click-card" />
            </Link>
          </Box>
        ))}
      </Flex>

      <Box h={{ base: 8, md: 16, lg: 32 }}></Box>
    </Box>
  );
}

export default Join;
