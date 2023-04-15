import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    max-width: 40rem;

    margin: 3.75rem 0;

    > div {
      display: flex;
      width: 100%;
      max-width: 17rem;

      gap: 1rem;

      span {
        display: flex;
        width: 100%;
        max-width: 8rem;

        border-radius: 0.5rem;

        align-items: center;
        justify-content: center;

        color: ${theme.colors.gray[300]};
        background: ${theme.colors.gray[700]};

        font-weight: 700;
        font-size: 2rem;

        ${media.greaterThan('small')`
          font-size: 6.5rem;
        `}
        ${media.greaterThan('medium')`
          font-size: 10rem;
        `}
      }
    }
  `}
`

export const Separator = styled.span`
  ${({ theme }) => css`
    display: flex;
    height: 12.37rem;

    font-weight: 700;
    font-size: 10rem;
    color: ${theme.colors.green[500]};

    align-items: center;
  `}
`
