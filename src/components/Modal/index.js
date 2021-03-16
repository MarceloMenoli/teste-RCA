import { Button } from "../Button";
import { Container, Input } from "./style";

export const Modal = () => {
  return (
    <Container>
      {/* <input placeholder="E-mail" type="email" required />
      <input placeholder="Password" type="password" required /> */}
      {/* <button>Login</button> */}
      <Input placeholder="E-mail" type="email" required  />
      <Input placeholder="Password" type="password" required/>
      <Button  width= '240px' title="Login" />
    </Container>
  );
};
