import styled from 'styled-components'

export const Menu = styled.nav`
  display: flex;
  gap: 0.5rem;

  a {
    display: flex;

    width: 3rem;
    height: 3rem;

    align-items: center;
    justify-content: center;

    border: none;

    color: white;

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    &:hover {
      border-bottom: 3px solid green;
    }
    &.active {
      color: green;
    }
  }
`
