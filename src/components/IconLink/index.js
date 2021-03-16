import Link from "next/link";
import { Container, LinkImg } from "./styles";

export const IconLink = () => {
  return (
    <Container>
      <Link href="/cart">
        <LinkImg>
          <img src="/images/chart.png" />
        </LinkImg>
      </Link>
    </Container>
  );
};

export default IconLink;
