import { HeaderContainer, HeaderContent } from './styles'
import logoCoffee from '../../assets/logocoffee.svg'
import { LocationButton } from './LocationButton'
import { CartButton } from './CartButton'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">
          <img src={logoCoffee} alt="" />
        </Link>
        <nav>
          <LocationButton />
          <CartButton />
        </nav>
      </HeaderContent>
    </HeaderContainer>
  )
}
