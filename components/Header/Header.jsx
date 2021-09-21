import Image from 'next/image';
import { useRouter } from 'next/router';
import { Box } from '@chakra-ui/react';
import LogoImg from '../../public/images/Logo.png';
import { IoIosArrowBack } from 'react-icons/io';

const Header = () => {
  const router = useRouter();
  return (
    <Box align="center">
      <Box position="absolute">
        <IoIosArrowBack size="3.5rem" color="#48362A" onClick={() => router.back()} />
      </Box>
      <Image src={LogoImg} alt="Combatly" width="150px" height="150px" />
    </Box>
  );
};

export default Header;