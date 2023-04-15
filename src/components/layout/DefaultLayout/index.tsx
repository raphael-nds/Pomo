import { Outlet } from 'react-router-dom'
import { Header } from '../../molecules/Header'

import * as S from './styles'

export const DefaultLayout = () => {
  return (
    <S.Container>
      <Header />
      <Outlet />
    </S.Container>
  )
}
