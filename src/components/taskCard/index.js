import { Box, Flex, Text, Image } from '@chakra-ui/react';
import BaseCard from '../baseCard';

function TaskCard({ icon, title, text, color, data }) {
  return (
    <BaseCard p={12}>
      <Flex>
        <Image src={icon} width="60px" mr={4} />
        <Box>
          <Text fontSize="24px" fontWeight={900} color="#414152">
            {title}
          </Text>
          <Text fontSize="16px" color="#717186" mt="-4px">
            {text}
          </Text>
        </Box>
      </Flex>
      <Flex justifyContent="space-between" mt={10}>
        {data.map(d => (
          <Box borderRadius="12px" px={3} py={2} background={color} width="28%">
            <Box fontSize="24px" fontWeight={900} color="#414152">
              {d.title}
            </Box>
            <Box fontSize="14px" color="#9d9caf">
              {d.text}
            </Box>
          </Box>
        ))}
      </Flex>
    </BaseCard>
  );
}

export default TaskCard;
