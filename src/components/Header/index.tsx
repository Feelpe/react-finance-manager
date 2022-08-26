import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="money management" />
        <button type="button">
          Nota transação
        </button>
      </Content>
    </Container>
  )
}