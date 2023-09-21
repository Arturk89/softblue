import { navigation } from './nav-list'
import { Link } from '../../../../../shared/ui/Link/Link'
import './nav-list.scss'

/**
 *
 * dodaćflex-shring oraz padding przed logiem
 */

export function NavList() {
  return (
    <div className="navlistWrapper">
      {navigation.map(({ id, label, href }) => (
        <Link to={href} key={id} label={label} />
      ))}
    </div>
  )
}
