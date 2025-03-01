import { styled } from 'styled-components'

export const CoffeeCounterActionsContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;

  background-color: ${(props) => props.theme.basebutton};
  padding: 0.5rem 0.5rem;
  justify-content: space-between;
  gap: 0.25rem;
  span {
    color: ${(props) => props.theme.basetitle};
  }
  svg {
    color: ${(props) => props.theme.purple};
  }
  svg:hover {
    cursor: pointer;
    color: ${(props) => props.theme.purpledark};
  }
`
