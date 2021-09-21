import { Table, Thead, Tbody, Tr, Th, Td, Icon } from '@chakra-ui/react'

const CircleIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
)

const TablePlayers = ({ players }) => {
  return (
    <Table variant="unstyled" width="100%" >
      <Thead>
        <Tr>
          <Th fontWeight="900" fontSize="1.4rem">Players</Th>
          <Th></Th>
          <Th></Th>
          <Th textAlign="center" fontWeight="900" fontSize="1.4rem">Colors</Th>
        </Tr>
      </Thead>
      <Tbody>
        {players.map(player => (
          <Tr key={player.color}>
            <Td fontWeight="500" fontSize="1.1rem">{player.name}{player.host && ' (The boss)'}</Td>
            <Td></Td>
            <Td></Td>
            <Td textAlign="center">
              <CircleIcon boxSize={9} color={player.color} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table >
  );
};

export default TablePlayers;