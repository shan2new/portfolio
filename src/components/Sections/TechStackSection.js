import React from 'react';
import { Box, Heading, SimpleGrid, Icon, Text } from '@chakra-ui/react';

const TechStackSection = ({ title, items }) => {
  const sectionId = title.replace(/\s+/g, '').toLowerCase();

  return (
    <Box w="100%" bg="gray.50" p={6} borderRadius="lg" mb={4} id={sectionId}>
      <Heading as="h3" size="lg" mb={4} textAlign="center" color="teal.500">{title}</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {items.map(item => (
          <Box key={item.name} p={4} borderWidth="1px" borderRadius="lg" textAlign="center">
            <Icon as={item.icon} boxSize={6} mb={2} color={item.color} />
            <Text>{item.name}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TechStackSection;
