import { Minus, Plus } from 'phosphor-react'
import { CoffeeCounterActionsContainer } from './styles'
import { useContext, useState } from 'react'
import { CartContext } from '../../CartProvider/CartContext'

export interface CartActionsButtonProps {
  amount: number
  id: number
  // onQuantityChange: (newQuantity: number) => void
}

export function CartActionsButton({
  amount,
  id,
  // onQuantityChange,
}: CartActionsButtonProps) {
  const { updateItemQuantity } = useContext(CartContext)
  const [quantity, setQuantity] = useState(amount)

  function handleMinus() {
    if (quantity > 1) {
      const newQuantity = quantity - 1
      setQuantity(newQuantity)
      // onQuantityChange(newQuantity)
      updateItemQuantity(id, newQuantity)
    }
  }

  function handlePlus() {
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
    // onQuantityChange(newQuantity)
    updateItemQuantity(id, newQuantity)
  }

  return (
    <CoffeeCounterActionsContainer>
      <Minus size={14} weight="bold" onClick={handleMinus} />
      <span>{quantity}</span>
      <Plus size={14} weight="bold" onClick={handlePlus} />
    </CoffeeCounterActionsContainer>
  )
}
