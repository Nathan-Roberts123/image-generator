import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from "@chakra-ui/react";
import Wrapper from "../components/wrapper";

function LoignPage() {
  const isError = false;
  const input = "";

  return (
    <Wrapper type="login">
      <form>
        <FormControl isInvalid={isError}>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={input} />
          {!isError && <FormErrorMessage>Email is required.</FormErrorMessage>}
        </FormControl>

        <FormControl isInvalid={isError} className="mt-4">
          <FormLabel>Password</FormLabel>
          <Input type="password" value={input} />
          {!isError && <FormErrorMessage>Email is required.</FormErrorMessage>}
        </FormControl>
        <div className="flex justify-center mt-4">
          <Button type="submit" colorScheme="blue">
            Login
          </Button>
        </div>
      </form>
    </Wrapper>
  );
}

export default LoignPage;
