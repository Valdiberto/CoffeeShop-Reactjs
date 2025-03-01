import styled from 'styled-components'

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 8px;
  background: ${(props) => props.theme.purplelight};

  div {
    height: 1.375rem;
    width: 1.375rem;
    color: ${(props) => props.theme.purple};
  }

  a:nth-child(2) {
    color: ${(props) => props.theme.purpledark};
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 400;
  }
`
