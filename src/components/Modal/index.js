import { Container, Input, ModalButton } from "./style";
import { signIn } from "next-auth/client";

export const Modal = () => {
  return (
    <Container>
      {/* <input placeholder="E-mail" type="email" required />
      <input placeholder="Password" type="password" required /> */}
      {/* <button>Login</button> */}
      <Input placeholder="E-mail" type="email" required />
      <Input placeholder="Password" type="password" required />
      {/* <Button  width='240px' title="LOGIN" /> */}
      <ModalButton onClick={() => signIn("google")}>LOGIN</ModalButton>
    </Container>
  );
};
