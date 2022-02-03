import { useState } from 'react';
import { Box, Text, Image, Button, Center } from '@chakra-ui/react';

function NFTCard({ image, title, text }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <Box
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
      <Box>
        <Image src={image} w="100%" />
      </Box>
      <Box p={6}>
        <Text fontSize="22px" fontWeight={900} color="#414152">
          {title}
        </Text>
        <Text fontSize="14px" color="#7A7A86" mt="-8px">
          {text}
        </Text>
      </Box>

      <Box
        position="absolute"
        w="100%"
        h={isHover ? '100%' : '0px'}
        bottom={0}
        left={0}
        background="rgba(230, 235, 255, 0.6)"
        backdropFilter="blur(22px)"
        overflowY="scroll"
        px={10}
        overflow="hidden"
        transition="height .4s cubic-bezier(0, 1, 0.5, 1)"
      >
        <Text as="h3" fontSize="20px" fontWeight={900} mt={8} mb={2}>
          Energy
        </Text>
        <Text fontSize="16px" lineHeight="140%">
          Full access rights in Community, Guild, Growing channel. Join
          workshop.
        </Text>

        <Text as="h3" fontSize="20px" fontWeight={900} mb={2} mt={8}>
          Requirement
        </Text>
        <Text fontSize="16px" lineHeight="140%">
          F10 $RICE staked in DKP2 pool
        </Text>
        <Center
          w="100%"
          height="auto"
          p={8}
          position="absolute"
          left={0}
          bottom={0}
        >
          <Button opacity={isHover ? 1 : 0} transition="opacity .4s linear">
            Mint
          </Button>
        </Center>
      </Box>
    </Box>
  );
}

export default NFTCard;
