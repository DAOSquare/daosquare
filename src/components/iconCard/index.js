import { Box, Flex, Image } from '@chakra-ui/react';
import BaseCard from '../baseCard';

function IconCard({ icon, title, text }) {
  return (
    <BaseCard>
      <Flex minW="200px" lineHeight="normal">
        <Image src={icon} width="60px" mr={4} />
        <Box>
          <Box fontSize="22px" fontWeight={900} color="#414152" mt={1}>
            {title}
          </Box>
          <Box fontSize="14px" color="#9D9CAF" mt="6px">
            {text}
          </Box>
        </Box>
      </Flex>
    </BaseCard>
  );
}

export default IconCard;
