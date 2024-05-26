import React from 'react';
import { Box, Heading, SimpleGrid, Icon, Text, useColorModeValue } from '@chakra-ui/react';

const TechSection = ({ title, items }) => {
  const sectionId = title.replace(/\s+/g, '').toLowerCase();
  const borderColor = useColorModeValue('gray.300', 'gray.600')
  return (
    <Box w="100%" bg={useColorModeValue('gray.50', 'gray.800')} p={6} borderRadius="lg" mb={4} id={sectionId}>
      <Heading as="h3" size="lg" mb={4} textAlign="center" color={useColorModeValue('teal.500', 'teal.300')}>{title}</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {items.map(item => (
          <Box key={item.name} p={4} borderWidth="1px" borderRadius="lg" textAlign="center" borderColor={borderColor}>
            <Icon as={item.icon} boxSize={6} mb={2} color={item.color} />
            <Text>{item.name}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TechSection;