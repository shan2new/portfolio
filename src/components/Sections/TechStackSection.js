import React from 'react';
import { Box, Heading, SimpleGrid, Icon, Text, useColorModeValue } from '@chakra-ui/react';

const TechSection = ({ sectionId, title, items, techItemBgColor }) => {
  const headingColor = useColorModeValue('teal.500', 'teal.300');
  const borderColor = useColorModeValue('gray.300', 'gray.600');

  console.log("TechSection", sectionId, title, items, techItemBgColor);
  return (
    <Box w="100%" bg={techItemBgColor} p={6} borderRadius="lg" mb={4} id={sectionId}>
      <Heading as="h3" size="lg" mb={4} textAlign="center" color={headingColor}>{title}</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {items.map(item => (
          <Box key={item.name} p={4} borderWidth="1px" borderRadius="lg" textAlign="center" borderColor={borderColor}>
            <Icon as={item.icon} boxSize={4} mb={2} color={item.color} />
            <Text>{item.name}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TechSection;
