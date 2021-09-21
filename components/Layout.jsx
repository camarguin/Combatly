import { Box } from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    <Box minH="100vh" bg="url('../images/HomepageBackground.png')" backgroundPosition="center">
      {children}
    </Box>
  );
};

export default Layout;