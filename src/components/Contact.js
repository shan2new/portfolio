import React from 'react';
import { Box, Heading, Text, Link, VStack, Button, HStack, Icon, Tooltip } from '@chakra-ui/react';
import { FaLinkedin, FaWhatsapp, FaApple, FaMapMarkerAlt } from 'react-icons/fa';
import Flag from 'react-world-flags';
import StatusCTA from './Sections/InterviewStatusCTA';

const Contact = () => (
  <Box textAlign="center" py={10} px={6}>
    <Heading as="h2" size="xl" mt={6} mb={2}>
      Contact Me
    </Heading>
    <VStack spacing={4} mt={4}>
      <StatusCTA/>
      <Text fontSize="lg">Email: <Link href="mailto:shantanusinha95@gmail.com" color="teal.500">shantanusinha95@gmail.com</Link></Text>
      <Text fontSize="lg">Phone: <Link href="tel:+918377992599" color="teal.500">+91 83779 92599</Link></Text>
      <Text fontSize="lg">
        <Icon as={FaMapMarkerAlt} /> Bengaluru
        <Tooltip label="India" aria-label="India">
          <span>
            <Flag code="IN" style={{ width: '1.0em', display: 'inline', marginLeft: '0.2em' }} />
          </span>
        </Tooltip>
      </Text>
      <HStack spacing={4}>
        <Button as="a" href="https://www.linkedin.com/in/shan2new" target="_blank" colorScheme="linkedin">
          <Icon as={FaLinkedin} />
        </Button>
        <Button as="a" href="https://wa.me/918377992599" target="_blank" colorScheme="whatsapp">
          <Icon as={FaWhatsapp} />
        </Button>
        <Button as="a" href="sms:+918377992599" target="_blank" colorScheme="blue">
          <Icon as={FaApple} />
        </Button>
      </HStack>
      <Button as="a" href="https://drive.google.com/file/d/1N0l1IdXsMxs9GvIpYCaBGWQiSdF1-X-x/view?usp=sharing" target="_blank" colorScheme="teal" variant="outline">
          View Resume
        </Button>
    </VStack>
  </Box>
);

export default Contact;
