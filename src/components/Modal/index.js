import { Button } from "../Button";
import { Container } from "./style";

export const Modal = () => {
  return (
    <Container>
      <input placeholder="E-mail" type="email" required />
      <input placeholder="Password" type="password" required />
      {/* <button>Login</button> */}
      <Button title="Login" />
    </Container>
  );
};
