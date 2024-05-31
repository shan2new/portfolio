import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  useColorModeValue,
  VStack,
  HStack,
} from "@chakra-ui/react";

const TechSection = ({
  sectionId,
  title,
  categories,
  items,
  techItemBgColor,
}) => {
  const headingColor = useColorModeValue("teal.500", "teal.300");
  const borderColor = useColorModeValue("gray.300", "gray.600");

  return (
    <Box
      w="100%"
      bg={techItemBgColor}
      p={6}
      borderRadius="lg"
      mb={4}
      id={sectionId}
    >
      <Heading as="h3" size="lg" mb={4} textAlign="center" color={headingColor}>
        {title}
      </Heading>
      <VStack spacing={6} align="start">
        {categories?.map((category) => (
          <Box key={category.title} w="100%">
            <Heading
              as="h4"
              size="md"
              mb={4}
              textAlign="left"
              color={headingColor}
            >
              {category.title}
            </Heading>
            <SimpleGrid columns={[1, 2, 3]} spacing={4}>
              {category.items.map((item) => (
                <Box
                  key={item.name}
                  p={4}
                  borderWidth="1px"
                  borderRadius="lg"
                  textAlign="center"
                  borderColor={borderColor}
                >
                  <Icon as={item.icon} boxSize={4} mb={2} color={item.color} />
                  <Text>{item.name}</Text>
                  {item.subItems && (
                    <VStack mt={2} spacing={2} align="start">
                      {item.subItems.map((framework) => (
                        <HStack key={framework.name} spacing={2}>
                          <Icon
                            as={framework.icon}
                            boxSize={3}
                            color={framework.color}
                          />
                          <Text>{framework.name}</Text>
                        </HStack>
                      ))}
                    </VStack>
                  )}
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        ))}
      </VStack>
      <SimpleGrid columns={[1, 2, 3, 4, 5, 6]} spacing={4}>
      {items?.map((item) => (
          <Box
            key={item.name}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            textAlign="center"
            borderColor={borderColor}
          >
            <Icon as={item.icon} boxSize={4} mb={2} color={item.color} />
            <Text>{item.name}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TechSection;
