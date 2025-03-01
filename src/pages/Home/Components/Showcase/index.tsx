import { CoffeeListContainer, HeaderShowCaseContainer } from './styles'

import { itens } from '../../../../components/ProductList'
import { CoffeeCard } from '../../../../components/CoffeeCard'
export function ShowCase() {
  return (
    <div>
      <HeaderShowCaseContainer>Nossos Cafés</HeaderShowCaseContainer>
      <CoffeeListContainer>
        {itens.map((item) => (
          <CoffeeCard key={item.id} {...item} />
        ))}
      </CoffeeListContainer>
    </div>
  )
}
