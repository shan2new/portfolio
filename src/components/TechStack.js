import React from 'react';
import { Box, VStack, useColorModeValue } from '@chakra-ui/react';
import { FaReact, FaVuejs, FaJs, FaPython } from 'react-icons/fa';
import { SiRedux, SiTypescript, SiNestjs, SiExpress, SiDjango, SiPostgresql, SiMongodb, SiRedis, SiAmazonaws, SiFlask, SiReact, SiBitbucket, SiJenkins, SiDocker, SiMysql, SiSequelize, SiAmazondocumentdb, SiMaterialdesign, SiChakraui } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import TechStackSection from './Sections/TechStackSection';
import TechStackHighlightSection from './Sections/TechStackHighlightSection';
import useSmoothScroll from './Helpers/useSmoothScroll';
import { FaDatabase } from 'react-icons/fa6';

const techStack = {
  backend: {
    title: 'Backend',
    key: 'backend',
    categories: [
      {
        title: 'Programming Languages',
        items: [
          { 
            name: 'Node/JavaScript', 
            icon: FaJs, 
            color: '#f0db4f',
            subItems: [
              { name: 'Express', icon: SiExpress, color: '#000000' },
              { name: 'NestJS', icon: SiNestjs, color: '#e0234e' },
            ]
          },
          { 
            name: 'Node/TypeScript', 
            icon: SiTypescript, 
            color: '#007acc',
            subItems: [
              { name: 'Express', icon: SiExpress, color: '#000000' },
              { name: 'NestJS', icon: SiNestjs, color: '#e0234e' }
            ]
          },
          { 
            name: 'Python', 
            icon: FaPython, 
            color: '#306998',
            subItems: [
              { name: 'Django', icon: SiDjango, color: '#092e20' },
              { name: 'Flask', icon: SiFlask, color: '#000000' }
            ]
          }
        ]
      },
      {
        title: 'Databases',
        items: [
          {
            name: 'SQL',
            icon: FaDatabase, 
            color: '#f0db4f',
            subItems: [
              { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
              { name: 'MySQL', icon: SiMysql, color: '#336791' }
            ]
          },
          {
            name: 'NoSQL',
            icon: SiAmazondocumentdb, 
            color: '#f0db4f',
            subItems: [
              { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
              { name: 'Redis', icon: SiRedis, color: '#DC382D' }
            ]
          }
        ]
      },
      {
        title: 'Cloud Services',
        items: [
          { name: 'Amazon SQS', icon: SiAmazonaws, color: '#FF9900' }
        ]
      }
    ]
  },
    frontend: {
      title: 'Frontend',
      key: 'frontend',
      items: [
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'Vue', icon: FaVuejs, color: '#42b883' },
        { name: 'Redux', icon: SiRedux, color: '#764ABC' },
        { name: 'Material UI', icon: SiMaterialdesign, color: '#764ABC' },
        { name: 'Chakra UI', icon: SiChakraui, color: '#764ABC' }
      ]
    },
    cloudServices: {
      title: 'Cloud Services(AWS)',
      key: 'cloudServices',
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
      key: 'mobile',
      items: [
        { name: 'React Native', icon: SiReact, color: '#61DAFB' }
      ]
    },
    microservices: {
      title: 'Microservices',
      key: 'microservices',
      items: [
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'AWS ECS', icon: DiAws, color: '#FF9900' }
      ]
    },
    ciCd: {
      title: 'CI/CD',
      key: 'ciCd',
      items: [
        { name: 'Bitbucket Pipelines', icon: SiBitbucket, color: '#0052CC' },
        { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
        { name: 'AWS CodeDeploy', icon: DiAws, color: '#FF9900' }
      ]
    }
  };
  
  const TechStack = () => {
    useSmoothScroll();
    const sections = Object.values(techStack).map(section => ({ key: section.key, title: section.title }));
    const categoryColors = {
      backend: useColorModeValue('teal.200', 'teal.700'),
      frontend: useColorModeValue('blue.200', 'blue.700'),
      cloudServices: useColorModeValue('purple.200', 'purple.700'),
      mobile: useColorModeValue('green.200', 'green.700'),
      microservices: useColorModeValue('orange.200', 'orange.700'),
      ciCd: useColorModeValue('pink.200', 'pink.700')
    };
    const borderColor = useColorModeValue('gray.300', 'gray.600');
    const hoverBgColor = useColorModeValue('gray.200', 'gray.600');
    const textColor = useColorModeValue('black', 'white');
    const techItemBgColor = useColorModeValue('gray.50', 'gray.800');
  
    return (
      <Box py={10} px={6}>
        <TechStackHighlightSection sections={sections} categoryColors={categoryColors} borderColor={borderColor} hoverBgColor={hoverBgColor} textColor={textColor} />
        <VStack spacing={10} align="start">
          {Object.values(techStack).map(section => (
            <TechStackSection key={section.key} sectionId={section.key} title={section.title} items={section.items} categories={section.categories} techItemBgColor={techItemBgColor} />
          ))}
        </VStack>
      </Box>
    );
  };
  
  export default TechStack;