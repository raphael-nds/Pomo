import { ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from './styles'

export type ButtonProps = {
  // full?: boolean
  // iconLeft?: string
  // arrowRight?: boolean
  children: ReactNode
  interruped?: string
  // isLoading?: boolean
  // typeButton?: 'default' | 'ghost'
  // disabled?: boolean
  // width: string
  // themeButton?: ThemesButton
  // isHiddenText?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, interruped, ...rest }: ButtonProps) => {
  return (
    <S.Button color={interruped} {...rest}>
      {children}
    </S.Button>
  )
}
