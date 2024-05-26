import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink as RouterNavLink } from 'react-router-dom';
import { ChakraProvider, Box, Flex, HStack, Button, useColorMode, useColorModeValue, IconButton, Container, Icon } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaHome } from 'react-icons/fa';
import Home from './components/Home';
import Work from './components/Work';
import Contact from './components/Contact';
import TechStack from './components/TechStack'; // Import TechStack component

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");
  const navBg = useColorModeValue("white", "gray.800");
  const shadow = useColorModeValue("md", "dark-lg");
  const activeLinkColor = useColorModeValue("teal.600", "teal.300");

  return (
    <ChakraProvider>
      <Router>
        <Box bg={bgColor} color={color} minH="100vh" pb={4}>
          <Box
            position="sticky"
            top="0"
            zIndex="sticky"
            bg={navBg}
            boxShadow={shadow}
          >
            <Container maxW="container.xl">
              <Flex as="header" justify="space-between" align="center" py={4}>
                <HStack spacing={4}>
                  <Button
                    as={RouterNavLink}
                    to="/"
                    variant="link"
                    _activeLink={{ color: activeLinkColor }}
                    aria-label="Home"
                  >
                    <Icon as={FaHome} />
                  </Button>
                  <Button
                    as={RouterNavLink}
                    to="/work"
                    variant="link"
                    _activeLink={{ color: activeLinkColor }}
                    textTransform="uppercase"
                  >
                    Work
                  </Button>
                  <Button
                    as={RouterNavLink}
                    to="/techstack"
                    variant="link"
                    _activeLink={{ color: activeLinkColor }}
                    textTransform="uppercase"
                  >
                    Tech Stack
                  </Button>
                  <Button
                    as={RouterNavLink}
                    to="/contact"
                    variant="link"
                    _activeLink={{ color: activeLinkColor }}
                    textTransform="uppercase"
                  >
                    Contact
                  </Button>
                </HStack>
                <IconButton
                  icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                  isRound
                  size="md"
                  onClick={toggleColorMode}
                />
              </Flex>
            </Container>
          </Box>
          <Container maxW="container.xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/techstack" element={<TechStack />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Container>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
