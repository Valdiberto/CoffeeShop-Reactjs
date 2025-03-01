import { styled } from 'styled-components'

export const BackgroundContainer = styled.div`
  padding: 2.5rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme.basecard};
  margin-bottom: 0.75rem;
`
export const AddressesTitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme.yellowdark};
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

  input {
    font-size: 0.875rem;
    border-radius: 4px;
    border: 2px solid ${(props) => props.theme.basebutton};
    color: ${(props) => props.theme.baselabel};
    padding: 0.75rem;
    background-color: ${(props) => props.theme.baseinput};
    &:focus {
      border-color: ${(props) => props.theme.yellowdark};
      outline: none;
    }
  }
`

export const LargeInput = styled.input`
  display: flex;
  &.cep {
    width: 35%;
  }
`
export const SmallInput = styled.input`
  &.numero {
    width: 55%;
  }
  &.bairro {
    width: 37%;
  }
  &.complemento {
    width: 100%;
  }
  &.cidade {
    width: 51%;
  }
  &.uf {
    width: 11%;
  }
`
export const InputRow = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const ComplementoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`

export const OptionalText = styled.span`
  position: absolute;
  right: 1rem;
  color: ${(props) => props.theme.baselabel};
  font-size: 0.75rem;
  font-style: italic;
  pointer-events: none;
`
