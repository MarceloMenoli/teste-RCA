import IconLink from "../IconLink";
import { Container, Counter, IconWrapper, Title } from "./style";

export const Section = ({counter}) => {
  return (
    <Container>
      <Title>Products</Title>
      <IconWrapper>
        <IconLink />
        <Counter>{counter}</Counter>
      </IconWrapper>
    </Container>
  );
};

export default Section;
