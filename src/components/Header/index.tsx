import { Container, SortContainer } from "./styles";
import { ReactNode } from 'react';


interface HeaderProps {
  children: ReactNode
  HandleSort: () => void
}

export default function Header({ children, HandleSort }: HeaderProps) {

  return (
    <Container>
      <h3>Countries API</h3>
      <SortContainer onClick={HandleSort}>
        {children}
      </SortContainer>
    </Container>

  )
}



