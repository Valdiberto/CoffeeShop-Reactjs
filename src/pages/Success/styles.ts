import { styled } from 'styled-components'

export const SuccessPage = styled.main`
  display: flex;
`

export const LeftContainer = styled.div`
  width: 100%;
  margin-right: 3.1875rem;
  header {
    color: ${(props) => props.theme.yellowdark};
  }
`
export const SuccessInfoContainer = styled.div`
  position: relative;
  padding: 2.5rem 2.5rem 0.5rem;
  margin-top: 2.5rem;
  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: 3px 36px;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    );
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
    border-radius: 3px 36px;
    background: ${(props) => props.theme.background};
    z-index: -1;
  }
`

export const InfoItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme.white};
  }
  div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }

  &:nth-child(1) div:first-child {
    background-color: ${(props) => props.theme.purple};
  }
  &:nth-child(2) div:first-child {
    background-color: ${(props) => props.theme.yellow};
  }
  &:nth-child(3) div:first-child {
    background-color: ${(props) => props.theme.yellowdark};
  }
`

export const RightContainer = styled.div`
  display: flex;
  align-items: end;
  margin-left: 3.1875rem;
`
