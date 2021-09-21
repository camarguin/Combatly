import { useState } from "react"
import { Box, Text } from "@chakra-ui/react"
import Header from "../../components/Header/Header"
import Layout from "../../components/Layout"
import EmptyTablePlayers from "../../components/TablePlayers/EmptyTablePlayers"
import TablePlayers from "../../components/TablePlayers/TablePlayers"
import WhiteContainer from "../../components/templates/WhiteContainer"
import MyButton from "../../components/MyButton/MyButton"



const players = [
  {
    name: 'Lucas',
    color: 'red',
    host: true
  },
  {
    name: 'Vinicius',
    color: 'blue',
    host: false
  },
  {
    name: 'Joao',
    color: 'pink',
    host: false
  },
  {
    name: 'Rick',
    color: 'yellow',
    host: false
  },
  {
    name: 'Jhonny',
    color: 'green',
    host: false
  },
  {
    name: 'Matheus',
    color: 'purple',
    host: false
  }
]

export default function Room() {
  const [playersQtd, setPlayersQtd] = useState(2)
  const [isHost, setIsHost] = useState(false)

  return (
    <Layout>
      <Header />
      <WhiteContainer>
        {playersQtd > 1 ? (
          <TablePlayers players={players} />
        ) : (
          <EmptyTablePlayers />
        )}
      </WhiteContainer>
      {isHost ? (
        <Box align="center" padding="10px 0px">
          <MyButton btnName="Start Match" />
        </Box>
      ) : (
        <Box align="center" padding="10px 0px">
          <Text fontWeight="900" fontSize="1.5rem" color="logoBrown.100">Waiting for the host to start the match</Text>
        </Box>
      )}
    </Layout>
  )
}
