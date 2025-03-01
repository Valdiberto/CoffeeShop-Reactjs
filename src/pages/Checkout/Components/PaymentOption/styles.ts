import { styled } from 'styled-components'
import { AddressesTitleContainer } from '../AddressForm/styles'

export const PaymentTitleContainer = styled(AddressesTitleContainer)`
  svg {
    color: ${(props) => props.theme.purple};
  }
  margin-bottom: 2rem;
`
export const PaymentOptionsContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`

export const PaymentButtons = styled.div`
  display: flex;
  align-items: center;

  border: 0;
  cursor: pointer;
  border-radius: 6px;
  background: ${(props) => props.theme.basebutton};
  padding: 1rem;
  font-size: 0.75rem;
  font-weight: 400;
  margin-right: 0.75rem;
  width: 100%;
  svg {
    color: ${(props) => props.theme.purple};
  }
  span {
    font-size: 0.75rem;
    margin-left: 0.75rem;
    line-height: 1.6;
  }
  &:hover {
    background: ${(props) => props.theme.basehover};
  }
  &.selected {
    background: ${(props) => props.theme.purplelight};

    border: 2px solid ${(props) => props.theme.purple};
  }
`
