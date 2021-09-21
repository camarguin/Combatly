import { FormControl, Input, FormLabel, FormErrorMessage, VStack, Container, Button } from "@chakra-ui/react";
import MyButton from "../MyButton/MyButton";

const Form = ({ formTitle, btnName, formBtnSubmit }) => {
  return (
    <Container marginTop="100px">
      <FormControl maxW="300px" margin="0 auto" >
        <FormLabel
          textAlign="center"
          fontSize="1.5rem"
          fontWeight="extrabold"
          color="yellow.900"
          margin="0 auto"
          textShadow="1px 1px 1px #000"
          paddingBottom="20px"
        >
          {formTitle}
        </FormLabel>
        <VStack spacing="3" justifyContent="center">
          <Input bgColor="rgba(0,0,0, 0.6)"
            type="text"
            color="white"
            placeholder="Room Name"
            _placeholder={{ color: 'white', fontWeight: 'bold' }}
            borderColor="white"
            isRequired
          />
          <Input
            bgColor="rgba(0,0,0, 0.6)"
            type="text"
            color="white"
            placeholder="Room Password"
            _placeholder={{ color: 'white', fontWeight: 'bold' }}
            borderColor="white"
          />
          <MyButton btnName={btnName} btnOnClick={formBtnSubmit} btnType="submit" />
          {/* <Button bgColor="yellow.900" size="md" padding="0px 50px" fontSize="0.9rem" borderRadius="20px">{btnName}</Button> */}
        </VStack>
      </FormControl>
    </Container >
  );
};

export default Form;