import { styled } from 'styled-components'

export const TagContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  a {
    border-radius: 8px;
    padding: 0.25rem 0.5rem;
    background-color: ${(props) => props.theme.yellowlight};
  }
`

export const CoffeeItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 15.7rem;
  height: 100%;
  margin-bottom: 0.5rem;
  border-radius: 6px 36px 6px 36px;
  background-color: ${(props) => props.theme.basecard};
  img {
    position: relative;
    top: -20px;
  }
  h3 {
    margin: 0.75rem 1.25rem 0.5rem;
  }
  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.baselabel};
    margin: 0rem 1.05rem;
  }
`

export const CoffeeBuyContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 2.0625rem 0rem 1.25rem;
  width: 13rem;
  justify-content: space-between;

  a {
    border-radius: 8px;
    padding: 0.5rem;
    height: 2.375rem;
    width: 2.375rem;
    background-color: ${(props) => props.theme.purple};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
  a:hover {
    background-color: ${(props) => props.theme.purpledark};
  }

  h5 {
    span {
      font-family: 'baloo 2', sans-serif;
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
`

export const CoffeeBuyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.purple};
  border: 0;
  border-radius: 8px;
  padding: 0.5rem 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.purpledark};
  }

  svg {
    color: ${(props) => props.theme.white};
  }
`
