import { Trash } from 'phosphor-react'
import {
  ButtonArea,
  ButtonSubmit,
  CheckoutContainer,
  CheckoutLeftContainer,
  CheckoutRightContainer,
  Deliveryprice,
  FormContainer,
  ItemCartContainer,
  ItemDesc,
  ItemImg,
  ItemInfoContainer,
  ItemPrice,
  ItemsContainer,
  RemoverContainer,
  Total,
  TotalContainer,
  TotalItems,
} from './styles'

import { CartActionsButton } from '../../components/Buttons/CounterActions'
import { AddressesForm } from './Components/AddressForm'
import { PaymentOptions } from './Components/PaymentOption'
import { BackgroundContainer } from './Components/AddressForm/styles'
import { useContext, useState } from 'react'
import { CartContext } from '../../components/CartProvider/CartContext'
import { useForm } from 'react-hook-form'
import { AddressContext } from '../../components/AddressProvider/AddressContext'
import { useNavigate } from 'react-router-dom'
export function Checkout() {
  const navigate = useNavigate()
  const [selectedPayment, setSelectedPayment] = useState('')
  const { cart, removeFromCart } = useContext(CartContext)
  const { address } = useContext(AddressContext)
  const totalItemsPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  )
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalItemsPrice)

  const shippingPrice = 3.5

  const formattedShippingPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(shippingPrice)

  const totalPrice = totalItemsPrice + shippingPrice

  const formattedTotalPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalPrice)
  const { handleSubmit } = useForm()

  function handleCreatePayment(data: any) {
    if (cart.length === 0) {
      alert('Seu carrinho está vazio')
      return
    }
    if (
      !address.cep ||
      !address.rua ||
      !address.numero ||
      !address.bairro ||
      !address.cidade ||
      !address.uf
    ) {
      alert('Preencha todos os dados do endereço')
      return
    }

    if (!selectedPayment) {
      alert('Selecione uma forma de pagamento')
      return
    }
    const { cep, rua, numero, bairro, cidade, uf, complemento } = address
    console.log('Pedido confirmado!')
    console.log('Carrinho:', cart)
    console.log('Endereço:', {
      cep,
      rua,
      numero,
      bairro,
      cidade,
      uf,
      complemento,
    })
    console.log('Forma de pagamento:', selectedPayment)

    alert('Pedido confirmado com sucesso')
    cart.length = 0
    navigate('/success', { state: { payment: selectedPayment } })
  }

  function handleRemoveItem(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    event.preventDefault()
    const itemId = parseInt(event.currentTarget.value)

    removeFromCart(itemId)
    console.log(itemId)
  }

  return (
    <CheckoutContainer>
      <FormContainer onSubmit={handleSubmit(handleCreatePayment)} action="">
        <CheckoutLeftContainer>
          <header>Complete seu pedido</header>
          <AddressesForm />
          <PaymentOptions
            selected={selectedPayment}
            setSelected={setSelectedPayment}
          />
        </CheckoutLeftContainer>
        <CheckoutRightContainer>
          <header>Cafés selecionados</header>

          <BackgroundContainer>
            <ItemsContainer>
              {cart.length === 0 ? (
                <p>O carrinho está vazio</p>
              ) : (
                cart.map((item) => (
                  <ItemCartContainer key={item.id}>
                    <ItemInfoContainer>
                      <ItemImg>
                        <img src={item.img} alt=""></img>
                      </ItemImg>

                      <ItemDesc>
                        <h2>{item.name}</h2>
                        <ButtonArea>
                          <CartActionsButton
                            id={item.id}
                            amount={item.quantity}
                          />
                          <RemoverContainer
                            value={item.id}
                            onClick={handleRemoveItem}
                          >
                            <Trash size={16} />
                            <span>REMOVER</span>
                          </RemoverContainer>
                        </ButtonArea>
                      </ItemDesc>
                    </ItemInfoContainer>
                    <ItemPrice>
                      <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                    </ItemPrice>
                  </ItemCartContainer>
                ))
              )}
            </ItemsContainer>
            <TotalContainer>
              <TotalItems>
                <h5>Total de itens</h5>
                <span> {formattedPrice} </span>
              </TotalItems>
              <Deliveryprice>
                <h5>Entrega</h5>
                <span>{formattedShippingPrice}</span>
              </Deliveryprice>
              <Total>
                <h2>Total</h2>
                <h2>{formattedTotalPrice}</h2>
              </Total>
            </TotalContainer>
            <ButtonSubmit>CONFIRMAR PEDIDO</ButtonSubmit>
          </BackgroundContainer>
        </CheckoutRightContainer>
      </FormContainer>
    </CheckoutContainer>
  )
}
