import { ShoppingCart } from 'phosphor-react'
import { CartActionsButton } from '../Buttons/CounterActions'
import {
  CoffeeBuyButton,
  CoffeeBuyContainer,
  CoffeeItemContainer,
  TagContainer,
} from './styles'
import { useContext, useState } from 'react'
import { CartContext } from '../CartProvider/CartContext'

interface CoffeeProps {
  id: number
  name: string
  description: string
  price: number
  img: string
  tag: string[]
  quantity: number
}

export function CoffeeCard({
  id,
  name,
  description,
  price,
  img,
  tag,
  quantity,
}: CoffeeProps) {
  const { addToCart } = useContext(CartContext)

  const [itemQuantity, setItemQuantity] = useState(quantity)

  // carrinho de compras

  function handleBuyButton() {
    const itemToAdd = {
      id,
      name,
      quantity: itemQuantity,
      img,
      price,
    }
    addToCart(itemToAdd)

    alert('Item adicionado ao carrinho!')
  }

  return (
    <CoffeeItemContainer key={id}>
      <img src={img} alt=""></img>
      <TagContainer>
        {tag.map((tag, index) => (
          <a key={index} className="tag">
            {tag.toUpperCase()}
          </a>
        ))}
      </TagContainer>
      <h3>{name}</h3>
      <p>{description}</p>
      <CoffeeBuyContainer>
        <h5>
          R$ <span>{price.toFixed(2)}</span>
        </h5>
        <CartActionsButton id={id} amount={itemQuantity} />
        <CoffeeBuyButton onClick={handleBuyButton}>
          <ShoppingCart size={20} weight="fill" />
        </CoffeeBuyButton>
      </CoffeeBuyContainer>
    </CoffeeItemContainer>
  )
}
