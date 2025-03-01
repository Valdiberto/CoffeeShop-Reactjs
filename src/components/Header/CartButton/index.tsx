import { ShoppingCart } from 'phosphor-react'
import { ButtonCheckout, CartContainer } from './styles'
import { useContext } from 'react'
import { CartContext } from '../../CartProvider/CartContext'
import { useNavigate } from 'react-router-dom'

export function CartButton() {
  const { cart } = useContext(CartContext)
  const navigate = useNavigate()

  function handleCheckoutButton() {
    if (cart.length > 0) {
      navigate('/checkout')
    } else {
      alert('Your cart is empty.')
    }
  }
  return (
    <CartContainer>
      <ButtonCheckout onClick={handleCheckoutButton}>
        {cart.length === 0 ? (
          <div className="emptycart"></div>
        ) : (
          <div className="fullcart">{cart.length}</div>
        )}

        <ShoppingCart size={22} weight="fill" />
      </ButtonCheckout>
    </CartContainer>
  )
}
