import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { FaArrowAltCircleRight, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa6';

const StatusCTA = () => {
  const status = 'open'; // hardcoded status

  const checkboxVariants = {
    hidden: { opacity: 1, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Flex alignItems="center">
      {status === 'open' ? (
        <Flex alignItems="center" color="green.500">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={checkboxVariants}
            transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
          >
            <FaArrowAltCircleRight size={20} style={{ marginRight: '8px' }} />
          </motion.div>
          <Text fontSize="md" fontWeight="bold">
            OPEN TO WORK
          </Text>
        </Flex>
      ) : (
        <Flex alignItems="center" color="red.500">
          <FaTimesCircle size={20} style={{ marginRight: '8px' }} />
          <Text fontSize="md" fontWeight="bold">
            CLOSED TO INTERVIEWS
          </Text>
        </Flex>
      )}
    </Flex>
  );
};

export default StatusCTA;
