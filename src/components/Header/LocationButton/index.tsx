import { MapPin } from 'phosphor-react'
import { LocationContainer } from './styles'

export function LocationButton() {
  return (
    <LocationContainer>
      <div>
        <MapPin size={22} weight="fill" />
      </div>
      <a href="#">Porto Alegre, RS</a>
    </LocationContainer>
  )
}
