import { MdTimer } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { Menu } from './styles'

export const MenuHeader = () => {
  return (
    <Menu>
      <NavLink to="/" title="Timer">
        <MdTimer size="32px" />
      </NavLink>
      <NavLink to="/history" title="History">
        <MdTimer size="32px" />
      </NavLink>
    </Menu>
  )
}
