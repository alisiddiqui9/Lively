import { Box, Text, Flex, Icon, HStack, Center } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineCalendar } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { ImBubbles } from 'react-icons/im';

function Items() {
  return (
    <>
      <HStack spacing="50px">
        <Box>
          <Icon as={AiFillHome} fontSize="60px" ml="5px" />
          <Text mr="70px" fontWeight="700" fontSize="22px">
            <Link to="../main.js">HOME</Link>
          </Text>
        </Box>
        <Box>
          <Icon as={BsPeople} fontSize="60px" ml="15px" />
          <Text mr="70px" fontWeight="700" fontSize="22px">
            <Link to="../404.js">DOCTOR</Link>
          </Text>
        </Box>
        <Box>
          <Icon as={AiOutlineCalendar} fontSize="60px" ml="30px" />
          <Text mr="70px" fontWeight="700" fontSize="22px">
            <Link to="../404.js">CALENDAR</Link>
          </Text>
        </Box>
        <Box>
          <Icon as={ImBubbles} fontSize="60px" ml="5px" />
          <Text mr="70px" fontWeight="700" fontSize="22px">
            <Link to="../404.js">INBOX</Link>
          </Text>
        </Box>
      </HStack>
    </>
  );
}

export default Items;
