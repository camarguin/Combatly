import { Button } from '@chakra-ui/react';

const MyButton = ({ btnName, btnOnClick, btnType }) => {
  return (
    <Button onClick={btnOnClick} bgColor="yellow.900" width="190px" borderRadius="20px" color="white" type={btnType}>
      {btnName}
    </Button>
  );
};

export default MyButton;