import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import Ilustration from '../../assets/Illustration.svg'
import { useLocation } from 'react-router-dom'
import {
  InfoItemContainer,
  LeftContainer,
  RightContainer,
  SuccessInfoContainer,
  SuccessPage,
} from './styles'
import { useContext } from 'react'
import { AddressContext } from '../../components/AddressProvider/AddressContext'
interface LocationState {
  payment: string
}

export function Success() {
  const location = useLocation()
  const { payment } = location.state as LocationState
  const { address } = useContext(AddressContext)
  return (
    <SuccessPage>
      <LeftContainer>
        <div className="TitleContainer">
          <header>Uhu! Pedido confirmado</header>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>
        <SuccessInfoContainer>
          <InfoItemContainer>
            <div>
              <MapPin size={16} weight="fill" />
            </div>
            <div>
              <h2>
                Entrega em{' '}
                <strong>
                  {address.rua}, {address.numero}
                </strong>
              </h2>
              <h2>
                {address.bairro} - {address.cidade}, {address.uf}
              </h2>
            </div>
          </InfoItemContainer>
          <InfoItemContainer>
            <div>
              <Timer size={16} weight="fill" />
            </div>
            <div>
              <h2>Previsão de entrega</h2>
              <strong>20 min - 30 min</strong>
            </div>
          </InfoItemContainer>
          <InfoItemContainer>
            <div>
              <CurrencyDollar size={16} />
            </div>
            <div>
              <h2>Pagamento na entrega</h2>
              <strong>{payment}</strong>
            </div>
          </InfoItemContainer>
        </SuccessInfoContainer>
      </LeftContainer>
      <RightContainer>
        <img src={Ilustration} alt="" />
      </RightContainer>
    </SuccessPage>
  )
}
