import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

const TechStackHighlightSection = ({ sections, categoryColors, borderColor, hoverBgColor, textColor }) => {
  return (
    <Flex wrap="wrap" justifyContent="center" gap={2} pb={6}>
      {sections.map(section => (
        <a href={`#${section.key}`} key={section.key} style={{ textDecoration: 'none' }}>
          <Box
            py={1}
            px={3}
            borderRadius="md"
            textAlign="center"
            bg={categoryColors[section.key]}
            border="1px"
            borderColor={borderColor}
            color={textColor}
            fontSize="sm"
            fontWeight="bold"
            _hover={{ bg: hoverBgColor, cursor: 'pointer' }}
          >
            {section.title}
          </Box>
        </a>
      ))}
    </Flex>
  );
};

export default TechStackHighlightSection;
