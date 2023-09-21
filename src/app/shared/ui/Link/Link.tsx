import { NavLink, NavLinkProps } from 'react-router-dom'
import './link.scss'

interface LinkProps extends NavLinkProps {
  label: string
}

export function Link({ label, ...props }: LinkProps) {
  return (
    <NavLink className="link" {...props}>
      {label}
    </NavLink>
  )
}
