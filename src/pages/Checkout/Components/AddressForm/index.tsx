import { MapPinLine } from 'phosphor-react'
import {
  AddressesTitleContainer,
  BackgroundContainer,
  ComplementoContainer,
  InputContainer,
  InputRow,
  LargeInput,
  OptionalText,
  SmallInput,
} from './styles'

import { useContext } from 'react'
import { AddressContext } from '../../../../components/AddressProvider/AddressContext'

export function AddressesForm() {
  const { register } = useContext(AddressContext)

  return (
    <BackgroundContainer>
      <AddressesTitleContainer>
        <MapPinLine size={22} />
        <div>
          <h2>Endereço de Entrega</h2>
          <h5>Informe o endereço onde deseja receber seu pedido</h5>
        </div>
      </AddressesTitleContainer>
      <InputContainer>
        <LargeInput
          className="cep"
          type="number"
          placeholder="CEP"
          maxLength={8}
          minLength={8}
          required
          {...register('cep')}
        />
        <LargeInput
          className="rua"
          type="text"
          placeholder="Rua"
          required
          {...register('rua')}
        />
        <InputRow>
          <SmallInput
            className="numero"
            type="number"
            placeholder="Número"
            required
            {...register('numero')}
          />
          <ComplementoContainer>
            <SmallInput
              className="complemento"
              type="text"
              placeholder="Complemento"
            />
            <OptionalText>Opcional</OptionalText>
          </ComplementoContainer>
        </InputRow>
        <InputRow>
          <SmallInput
            className="bairro"
            type="text"
            placeholder="Bairro"
            required
            {...register('bairro')}
          />
          <SmallInput
            className="cidade"
            type="text"
            placeholder="Cidade"
            required
            {...register('cidade')}
          />
          <SmallInput
            className="uf"
            type="text"
            placeholder="UF"
            required
            maxLength={2}
            {...register('uf')}
          />
        </InputRow>
      </InputContainer>
    </BackgroundContainer>
  )
}
