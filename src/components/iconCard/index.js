import { Box, Flex, Image } from '@chakra-ui/react';
import BaseCard from '../baseCard';

function IconCard({ icon, title, text, ...props }) {
  return (
    <BaseCard {...props}>
      <Flex minW="200px" lineHeight="normal">
        <Image src={icon} width="60px" mr={4} />
        <Box>
          <Box
            fontSize="22px"
            fontWeight={900}
            color="#414152"
            mt={1}
            height="26px"
            lineHeight="26px"
            overflow="hidden"
          >
            {title}
          </Box>
          <Box
            fontSize="14px"
            color="#9D9CAF"
            mt="6px"
            height="18px"
            lineHeight="18px"
            overflow="hidden"
          >
            {text}
          </Box>
        </Box>
      </Flex>
    </BaseCard>
  );
}

export default IconCard;
