import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Box, HStack, Stack } from "@chakra-ui/react";
import MyButton from '../components/MyButton/MyButton';
import LogoImg from '../public/images/Logo.png';

export default function Home() {
  const router = useRouter()

  function handleJoin() {
    router.push('/join_room')
  }

  function handleCreate() {
    router.push('/create_room')
  }

  return (
    <Box minH="100vh" padding="50px 0px" bg="url('./images/HomepageBackground.png')" backgroundPosition="center">
      <Head>
        <title>Combatly</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Stack align="center">
        <Box maxW="400px">
          <Image src={LogoImg} alt="Combatly" width="400px" height="400px" />
        </Box>
        <HStack spacing="5">
          <MyButton btnOnClick={handleJoin} btnName="JOIN ROOM" />
          <MyButton btnOnClick={handleCreate} btnName="CREATE ROOM" />
        </HStack>
      </Stack>
    </Box>
  )
}
