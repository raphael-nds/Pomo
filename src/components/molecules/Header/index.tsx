import { MenuHeader } from '../../atoms/MenuHeader'
import { Logo } from '../../atoms/Logo'

import * as S from './styles'

export const Header = () => {
  return (
    <S.Container>
      <Logo />
      <MenuHeader />
    </S.Container>
  )
}
