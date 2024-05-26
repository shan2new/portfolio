import React from 'react';
import { Box, Heading, Text, VStack, List, ListItem, ListIcon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Rattle Software Private Limited, Bengaluru, India",
      period: "March 2023 - Current",
      details: [
        "Worked on the ideation, tech design & development of Project Board from scratch to iterations & performance improvements as the Project Owner.",
        "Initially worked solo in Backend along with two Frontend Engineers and one QA Engineer.",
        "Recruited another Backend Engineer, making the team strength to 5 members.",
        "Highly customizable visual representation of Salesforce data in the form of tables called Views, supporting Filters, Fields, Sorting, Searching.",
        "Extended project to include data from other features, making it a plugin-Platform feature apart from being standalone.",
        "Brainstormed with product and design teams to condense feature set into separate milestones and release cycles.",
        "Created RFCs for technical designs and discussions with peer Engineers.",
        "Created epics, stories, & tickets to track progress on a bi-weekly sprint basis.",
        "Proactively resolved blockers/bugs faced by the team, contributing to frontend and other dependent features with high ramp-up speed.",
        "Maintained high code quality and extensibility for quick and reliable integration of other features.",
        "Monitored and troubleshooted issues post-General Availability through error alerts, logs, and customer feedback.",
        "Optimized load time by 50% by restructuring stored information in Backend and re-organizing Frontend data usage."
      ]
    },
    {
      title: "Senior SDE-2",
      company: "Slice, Bengaluru, India",
      period: "May 2021 - February 2023",
      details: [
        "Led the complete revamp of onboarding journeys for all user classes with a backend team of 2 and frontend team of 4. Received special recognition for the effort.",
        "Carved out bureau credit report context as a microservice, onboarded Transunion CIBIL with pluggable-bureau code architecture, and full control over CI/CD pipeline setup.",
        "Owned health of the service, monitored metrics, and instrumented auto-scaling policies to save costs, with daily API requests of 170K+.",
        "Developed document management microservice with cross-team dependencies, handling secure upload & download of sensitive documents in S3 with server-side encryption.",
        "Owned service health, monitored metrics, and implemented auto-scaling policies, handling 500K+ daily API requests."
      ]
    },
    {
      title: "Full Stack Engineer",
      company: "eloelo (Early Age Startup)",
      period: "September 2020 - April 2021",
      details: [
        "Completely owned conversion of Py-Flask-Postgres monolith to microservices with Docker as container technology and AWS ECS as container orchestration technology.",
        "Used BitBucket pipelines for adding CI/CD across architecture, speeding up deployment process and ensuring proper load distribution.",
        "Designed and built push-notifications architecture with cohorts and scheduling using Python & AWS Lambda and AWS SQS.",
        "Owned the backend architecture for several complex features including User Generated Content (Node.js), User Content Polling (Node.js), and Q&A (Python).",
        "Initiated and owned the development of internal team dashboard, speeding up their work process by a factor of 5x.",
        "Created the POC and production app for Social Gaming, leading to pre-series A funding.",
        "Maintained Postman API collections with examples."
      ]
    },
    {
      title: "Software Engineer (Backend Heavy)",
      company: "Pratilipi",
      period: "August 2019 - August 2020",
      details: [
        "Built report system (microservice with micro-frontend) from scratch, handling over 100K daily requests.",
        "Built Incidents Management System, reducing ticket resolution time.",
        "Partially built Content Management System (CMS) from scratch.",
        "Implemented high-scale features like sorting/filtered stories and content recommendations based on trending words."
      ]
    },
    {
      title: "Product Engineer",
      company: "Goodera",
      period: "June 2018 - July 2019",
      details: [
        "Revamped multiple web pages of the product's AngularJS-based volunteering platform.",
        "Added full-stack business-critical features."
      ]
    },
    {
      title: "Software Engineering Intern",
      company: "Navyug Infosolutions Pvt. Ltd",
      period: "July 2017 - December 2017",
      details: [
        "Part of the team responsible for planning and developing a web application and corresponding APIs for a product associated with student examinations."
      ]
    }
  ];

const Work = () => (
  <Box py={10} px={6}>
    <Heading as="h2" size="xl" textAlign="center" mb={6}>
      My Work Experience
    </Heading>
    <VStack spacing={8} align="start">
      {experiences.map((exp) => (
        <Box key={exp.title}>
          <Heading as="h3" size="md">{exp.title}</Heading>
          <Text fontWeight="bold">{exp.company}</Text>
          <Text fontSize="sm" mb={2}>{exp.period}</Text>
          <List spacing={2}>
            {exp.details.map((detail) => (
              <ListItem key={detail}>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                {detail}
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </VStack>
  </Box>
);

export default Work;
