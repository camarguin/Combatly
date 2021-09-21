import { Container } from '@chakra-ui/react';

const WhiteContainer = ({ children }) => {
  return (
    <Container bgColor="white" borderRadius="10px" minH="450px" padding="15px" align="center">
      {children}
    </Container>
  );
};

export default WhiteContainer