import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

const categoryColors = {
  Backend: 'teal.200',
  Frontend: 'blue.200',
  'Cloud Services': 'purple.200',
  Mobile: 'green.200',
  Microservices: 'orange.200',
  'CI/CD': 'pink.200'
};

const TechStackHighlightSection = ({ sections }) => {
  return (
    <Flex wrap="wrap" justifyContent="center" gap={2} pb={6}>
      {sections.map(section => (
        <a href={`#${section.title.replace(/\s+/g, '').toLowerCase()}`} key={section.title} style={{ textDecoration: 'none' }}>
          <Box
            py={1}
            px={3}
            borderRadius="md"
            textAlign="center"
            bg={categoryColors[section.title]}
            border="1px"
            borderColor="gray.300"
            color="black"
            fontSize="sm"
            fontWeight="bold"
            _hover={{ bg: "gray.200", cursor: "pointer" }}
          >
            {section.title}
          </Box>
        </a>
      ))}
    </Flex>
  );
};

export default TechStackHighlightSection;
