import { styled } from 'styled-components'

export const CheckoutContainer = styled.main`
  display: 1;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  header {
    font-size: 1.125rem;
    margin-bottom: 0.9375rem;
  }
`

export const FormContainer = styled.form`
  display: flex;
`

export const CheckoutLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CheckoutRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  flex: content;
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -1rem;
`
export const ItemCartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.basebutton};
  padding: 1.5rem 0.25rem;
`
export const ItemInfoContainer = styled.div`
  display: flex;
`
export const ItemImg = styled.div`
  display: flex;
  width: 4rem;
  height: 4rem;
`

export const ItemDesc = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 1.25rem;

  h2 {
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme.basesubtitle};
  }
`
export const ButtonArea = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const RemoverContainer = styled.button`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: ${(props) => props.theme.basebutton};
  padding: 0.5rem 0.5rem;
  gap: 0.25rem;
  border: 0;
  span {
    font-size: 0.75rem;
    line-height: 1.6;
  }
  svg {
    color: ${(props) => props.theme.purple};
  }
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.basehover};
  }
`
export const ItemPrice = styled.div`
  display: flex;
  margin-left: auto;
  span {
    color: ${(props) => props.theme.basesubtitle};
    font-weight: 800;
  }
`
export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  gap: 0.75rem;
`

export const TotalItems = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Deliveryprice = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Total = styled.div`
  display: flex;
  font-weight: 700;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme.basesubtitle};
  }
`
export const ButtonSubmit = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  border-radius: 6px;
  background: ${(props) => props.theme.yellow};
  padding: 0.75rem 6.0625rem;
  font-size: 0.875rem;
  font-weight: 700;
  width: 100%;
  margin-top: 1.5rem;
  &:hover {
    background: ${(props) => props.theme.yellowdark};
  }
`
