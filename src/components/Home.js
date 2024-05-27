import React from 'react';
import { Box, Heading, Text, Button, VStack, HStack, Image, Link, Icon, Flex } from '@chakra-ui/react';
import { FaLinkedin } from 'react-icons/fa';
import StatusCTA from './Sections/InterviewStatusCTA';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => (
  <Box textAlign="center" py={10} px={6}>
    <VStack spacing={6}>
      <Image
        borderRadius="full"
        boxSize="280px"
        src="/profile.jpg"
        alt="Shantanu Sinha - Senior Software Engineer"
        mb={4}
      />
      <Flex alignItems="center" justifyContent="center">
        <Heading as="h2" size="xl" mt={6}>
          Shantanu Sinha
        </Heading>
        <Link href="https://www.linkedin.com/in/shan2new" isExternal>
          <Icon as={FaLinkedin} boxSize={6} color="#0A66C2" />
        </Link>
      </Flex>
      <StatusCTA />
      <Text fontSize="xl" textAlign="center">
          (Senior Software Engineer)
        </Text>
      <Text fontSize="m" textAlign="center">
          True full-stack experience of creating Products from scratch to scale
        </Text>
      <VStack spacing={4} mt={4}>
        <HStack spacing={4}>
          <Button as={RouterLink} to="/contact" colorScheme="teal">
            Get in Touch
          </Button>
          <Button as="a" href="https://drive.google.com/file/d/1N0l1IdXsMxs9GvIpYCaBGWQiSdF1-X-x/view?usp=sharing" target="_blank" colorScheme="teal" variant="outline">
            View Resume
          </Button>
        </HStack>
      </VStack>
    </VStack>
  </Box>
);

export default Home;

