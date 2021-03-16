import { Container } from "../Button/styles"

export const Button = ({title, onClick, width}) => {
  return (
    <Container width={width} onClick={onClick}> 
        {title}
    </Container>
  )
}