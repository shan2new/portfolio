import React from 'react';
import { Box, VStack, useColorModeValue } from '@chakra-ui/react';
import { FaAws, FaReact, FaVuejs, FaJs, FaPython } from 'react-icons/fa';
import { SiRedux, SiTypescript, SiNestjs, SiExpress, SiDjango, SiPostgresql, SiMongodb, SiRedis, SiAmazonaws, SiFlask, SiReact, SiBitbucket, SiJenkins, SiCodedeploy, SiDocker } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import TechStackSection from './Sections/TechStackSection';
import TechStackHighlightSection from './Sections/TechStackHighlightSection';

const techStack = {
    backend: {
      title: 'Backend',
      items: [
        { name: 'JavaScript', icon: FaJs, color: '#f0db4f' },
        { name: 'TypeScript', icon: SiTypescript, color: '#007acc' },
        { name: 'Python', icon: FaPython, color: '#306998' },
        { name: 'NestJS', icon: SiNestjs, color: '#e0234e' },
        { name: 'Express', icon: SiExpress, color: '#000000' },
        { name: 'Django', icon: SiDjango, color: '#092e20' },
        { name: 'Flask', icon: SiFlask, color: '#000000' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Redis', icon: SiRedis, color: '#DC382D' },
        { name: 'Amazon SQS', icon: SiAmazonaws, color: '#FF9900' }
      ]
    },
    frontend: {
      title: 'Frontend',
      items: [
        { name: 'JavaScript', icon: FaJs, color: '#f0db4f' },
        { name: 'TypeScript', icon: SiTypescript, color: '#007acc' },
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'Vue', icon: FaVuejs, color: '#42b883' },
        { name: 'Redux', icon: SiRedux, color: '#764ABC' }
      ]
    },
    cloudServices: {
      title: 'Cloud Services',
      items: [
        { name: 'EC2', icon: DiAws, color: '#FF9900' },
        { name: 'ECS', icon: DiAws, color: '#FF9900' },
        { name: 'RDS', icon: DiAws, color: '#FF9900' },
        { name: 'S3', icon: DiAws, color: '#FF9900' },
        { name: 'Route 53', icon: DiAws, color: '#FF9900' }
      ]
    },
    mobile: {
      title: 'Mobile',
      items: [
        { name: 'React Native', icon: SiReact, color: '#61DAFB' }
      ]
    },
    microservices: {
      title: 'Microservices',
      items: [
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'AWS ECS', icon: DiAws, color: '#FF9900' }
      ]
    },
    ciCd: {
      title: 'CI/CD',
      items: [
        { name: 'Bitbucket Pipelines', icon: SiBitbucket, color: '#0052CC' },
        { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
        { name: 'AWS CodeDeploy', icon: DiAws, color: '#FF9900' }
      ]
    }
  };
  
  const TechStack = () => {
    const sections = Object.values(techStack).map(section => ({ title: section.title }));
    const categoryColors = {
      Backend: useColorModeValue('teal.200', 'teal.700'),
      Frontend: useColorModeValue('blue.200', 'blue.700'),
      'Cloud Services': useColorModeValue('purple.200', 'purple.700'),
      Mobile: useColorModeValue('green.200', 'green.700'),
      Microservices: useColorModeValue('orange.200', 'orange.700'),
      'CI/CD': useColorModeValue('pink.200', 'pink.700')
    };
    const borderColor = useColorModeValue('gray.300', 'gray.600');
    const hoverBgColor = useColorModeValue('gray.200', 'gray.600');
    const textColor = useColorModeValue('black', 'white');
  
    return (
      <Box py={10} px={6}>
        <TechStackHighlightSection sections={sections} categoryColors={categoryColors} borderColor={borderColor} hoverBgColor={hoverBgColor} textColor={textColor} />
        <VStack spacing={10} align="start">
          {Object.values(techStack).map(section => (
            <TechStackSection key={section.title} title={section.title} items={section.items} />
          ))}
        </VStack>
      </Box>
    );
  };
  
  export default TechStack;