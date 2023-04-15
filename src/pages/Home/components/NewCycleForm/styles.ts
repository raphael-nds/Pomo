import styled, { css } from 'styled-components'

export const Form = styled.form``

export const BaseInput = styled.input`
  ${({ theme }) => css`
    width: 100%;
    background: transparent;
    color: ${theme.colors.gray[300]};
    height: 2.5rem;

    border: 0;
    border-bottom: 2px solid ${theme.colors.gray[500]};

    font-weight: bold;
    font-size: inherit;

    padding: 0 0.5rem;

    &:focus {
      box-shadow: none;
      border-color: ${theme.colors.green[500]};
    }

    &::placeholder {
      color: ${theme.colors.gray[500]};
    }
  `}
`

export const TaskInput = styled(BaseInput)`
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
  width: 100%;
  max-width: 18.5rem;
`
export const MinuteAmount = styled(BaseInput)`
  width: 6rem;
`
export const Erros = styled.p`
  position: absolute;
  color: red;
  align-items: center;

  padding: 0.5rem 0;
  font-size: 0.75rem;
`
