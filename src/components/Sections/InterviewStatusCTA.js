import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const StatusCTA = () => {
  const status = 'open'; // hardcoded status

  const checkboxVariants = {
    hidden: { opacity: 0, rotate: -40, scale: 0 },
    visible: { opacity: 1, rotate: 0, scale: 1},
  };

  return (
    <Flex alignItems="center">
      {status === 'open' ? (
        <Flex alignItems="center" color="green.500">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={checkboxVariants}
            transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          >
            <FaCheckCircle size={20} style={{ marginRight: '8px' }} />
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
