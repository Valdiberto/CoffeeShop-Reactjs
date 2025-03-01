import styled from 'styled-components'

export const CartContainer = styled.div`
  .fullcart {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -0.4625rem;
    right: -0.4625rem;
    height: 1.25rem;
    width: 1.25rem;
    font-weight: 400;
    font-size: 0.75rem;
    background: ${(props) => props.theme.yellowdark};
    color: ${(props) => props.theme.white};
    border-radius: 100%;
  }

  .emptycart {
    display: none;
  }
`

export const ButtonCheckout = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 0;
  border-radius: 8px;
  height: 2.375rem;
  width: 2.375rem;
  cursor: pointer;
  background: ${(props) => props.theme.yellowlight};
  svg {
    color: ${(props) => props.theme.yellowdark};
  }
`
