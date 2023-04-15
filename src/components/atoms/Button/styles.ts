import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

export const Button = styled.button<ButtonProps>`
  ${({ color, theme }) => css`
    width: 100%;

    padding: 1rem 2.5rem;

    border: none;
    border-radius: 0.5rem;

    cursor: pointer;

    background: ${
      color === 'interruped' ? theme.colors.red[500] : theme.colors.green[500]
    };


    color: ${theme.colors.white[100]};

    &:hover {
      opacity: 0.9;
    }
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
  `}
`
