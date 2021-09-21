import { Flex, Text } from '@chakra-ui/react';
import { HiDotsHorizontal } from 'react-icons/hi';
import LoadingDots from './LoadingDots';

const EmptyTablePlayers = () => {
  return (
    <Flex direction="column" align="center" justify="center" height="500px">
      <Text fontSize="1.7rem">WAITING FOR PLAYERS</Text>
      <LoadingDots />
    </Flex>
  );
};

export default EmptyTablePlayers;