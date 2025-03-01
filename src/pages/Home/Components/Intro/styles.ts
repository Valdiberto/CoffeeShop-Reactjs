import { styled } from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  margin: 5.75rem auto;
`
export const IntroLeftContainer = styled.div`
  margin-right: 3.5rem;
`

export const IntroTitleContainer = styled.div`
  margin-bottom: 2.0625rem;
  h1 {
    color: ${(props) => props.theme.basetitle};
    margin-bottom: 1rem;
    font-size: 3rem;
  }
`

export const IntroItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  margin-top: 4.125rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    svg {
      height: 2rem;
      width: 2rem;
      padding: 0.5rem;
      border-radius: 50%;
      color: ${(props) => props.theme.white};
    }
  }
  div:first-child {
    margin-bottom: 1.1875rem;
    svg {
      background-color: ${(props) => props.theme.yellowdark};
    }
  }
  div:nth-child(2) {
    margin-bottom: 1.1875rem;

    svg {
      background-color: ${(props) => props.theme.basetext};
    }
  }
  div:nth-child(3) {
    svg {
      background-color: ${(props) => props.theme.yellow};
    }
  }
  div:nth-child(4) {
    svg {
      background-color: ${(props) => props.theme.purple};
    }
  }
`

export const IntroImagemContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
`
