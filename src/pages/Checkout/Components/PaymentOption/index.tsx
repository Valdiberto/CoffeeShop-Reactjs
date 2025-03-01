import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { BackgroundContainer } from '../AddressForm/styles'
import {
  PaymentButtons,
  PaymentOptionsContainer,
  PaymentTitleContainer,
} from './styles'

interface PaymentOptionsProps {
  selected: string
  setSelected: (payment: string) => void
}

export function PaymentOptions({ selected, setSelected }: PaymentOptionsProps) {
  return (
    <BackgroundContainer>
      <PaymentTitleContainer>
        <CurrencyDollar size={22} />
        <div>
          <h2>Pagamento</h2>
          <h5>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </h5>
        </div>
      </PaymentTitleContainer>
      <PaymentOptionsContainer>
        <PaymentButtons
          className={`option ${selected === 'Cartão' ? 'selected' : ''}`}
          onClick={() => setSelected('Cartão')}
        >
          <CreditCard size={16} />
          <span>CARTÃO DE CRÉDITO</span>
        </PaymentButtons>
        <PaymentButtons
          className={`option ${selected === 'Débito' ? 'selected' : ''}`}
          onClick={() => setSelected('Débito')}
        >
          <Bank size={16} />
          <span>CARTÃO DE DÉBITO</span>
        </PaymentButtons>
        <PaymentButtons
          className={`option ${selected === 'Dinheiro' ? 'selected' : ''}`}
          onClick={() => setSelected('Dinheiro')}
        >
          <Money size={16} />
          <span>DINHEIRO</span>
        </PaymentButtons>
      </PaymentOptionsContainer>
    </BackgroundContainer>
  )
}
