import styled, { css } from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;

  padding: 3.5rem;

  h1 {
    font-size: 1.5rem;
  }
`

export const HistoryTable = styled.div`
  ${({ theme }) => css`
    flex: 1;
    overflow: auto;

    margin-top: 2rem;

    table {
      width: 100%;
      min-width: 600px;

      border-collapse: collapse;
    }

    th {
      padding: 1rem;
      text-align: left;
      line-height: 1.6rem;
      font-size: 0.875rem;

      background: ${theme.colors.gray[600]};
      color: ${theme.colors.white};

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background: ${theme.colors.gray[700]};
      border-top: 4px solid ${theme.colors.gray[800]};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6rem;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }
      &:last-child {
        padding-right: 1.5rem;
      }
    }
  `}
`

const STATUS_COLORS = {
  yellow: 'yellow[500]',
  green: 'green[500]',
  red: 'red[500]',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${(props) => props.statusColor}`
