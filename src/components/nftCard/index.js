import { useState } from 'react';
import { Box, Image, Button, Center, Link } from '@chakra-ui/react';
import './index.css';

function NFTCard({ bg, image, title, text, info, energy, requirement, visa }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <Box
      className="nft-card"
      bg="#fff"
      borderRadius="12px"
      boxShadow="0px 20px 50px rgba(18, 17, 39, 0.08)"
      position="relative"
      overflow="hidden"
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <Center background={bg} height="360px">
        <Image src={image} w={{ base: '100px', md: '120px' }} />
      </Center>
      <Box p={6}>
        <Box fontSize="22px" fontWeight={900} color="#414152">
          {title}
        </Box>
        <Box fontSize="14px" color="#7A7A86">
          {text}
        </Box>
      </Box>

      <Box
        position="absolute"
        w="100%"
        h={isHover ? '100%' : '0px'}
        bottom={0}
        left={0}
        background="rgba(230, 235, 255, 0.8)"
        backdropFilter="blur(40px)"
        overflow="hidden"
        transition="height .4s cubic-bezier(0, 1, 0.5, 1)"
      >
        <Box px={10} py={8} h="calc(100% - 102px)" overflow="scroll">
          <Box mb={8}>
            <Box as="h3" className="title">
              Info
            </Box>
            <Box className="text">{info}</Box>
          </Box>

          <Box mb={8}>
            <Box as="h3" className="title">
              Energy
            </Box>
            <Box className="text">
              <ul>
                {energy.map((d, i) => (
                  <li key={i} className="text">
                    {d}
                  </li>
                ))}
              </ul>
            </Box>
          </Box>

          <Box mb={8}>
            <Box as="h3" className="title">
              Requirement
            </Box>
            <Box className="text">
              Coming soon
              {/* <ul>
                {requirement.map((d, i) => (
                  <li key={i} className="text">
                    {d}
                  </li>
                ))}
              </ul> */}
            </Box>
          </Box>

          <Box mb={8}>
            <Box as="h3" className="title">
              Visa
            </Box>
            <Box className="text">{visa}</Box>
          </Box>
        </Box>

        <Center pos="absolute" w="100%" h="102px" left={0} bottom={0}>
          {/* <Link href="https://dkp.land/" target="_blank"> */}
          <Button cussor="pointer">Mint</Button>
          {/* </Link> */}
        </Center>
      </Box>
    </Box>
  );
}

export default NFTCard;
