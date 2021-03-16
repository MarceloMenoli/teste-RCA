import IconLink from "../IconLink";
import { Container, Counter, IconWrapper, Title } from "./style";

export const Section = () => {
  return (
    <Container>
      <Title>Products</Title>
      <IconWrapper>
        <IconLink />
        <Counter>1</Counter>
      </IconWrapper>
    </Container>
  );
};

export default Section;
