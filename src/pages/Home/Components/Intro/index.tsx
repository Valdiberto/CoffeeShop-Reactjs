import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import introImagem from '../../../../assets/introImagem.svg'
import {
  IntroContainer,
  IntroImagemContainer,
  IntroItemsContainer,
  IntroLeftContainer,
  IntroTitleContainer,
} from './styles'

export function Intro() {
  return (
    <IntroContainer>
      <IntroLeftContainer>
        <IntroTitleContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </IntroTitleContainer>
        <IntroItemsContainer>
          <div>
            <ShoppingCart size={16} weight="fill" />
            <h2>Compra simples e segura</h2>
          </div>
          <div>
            <Package size={16} weight="fill" />
            <h2>Embalagem mantém o café intacto</h2>
          </div>
          <div>
            <Timer size={16} weight="fill" />
            <h2>Entrega rápida e rastreada</h2>
          </div>

          <div>
            <Coffee size={16} weight="fill" />
            <h2>O café chega fresquinho até você</h2>
          </div>
        </IntroItemsContainer>
      </IntroLeftContainer>
      <IntroImagemContainer>
        <img src={introImagem} alt="" />
      </IntroImagemContainer>
    </IntroContainer>
  )
}
