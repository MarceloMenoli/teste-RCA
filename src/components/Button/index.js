import { Container } from "../Button/styles"

export const Button = ({title, onClick}) => {
  return (
    <Container onClick={onClick}> 
        {title}
    </Container>
  )
}