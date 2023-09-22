import { navigation } from './nav-list'
import { Link } from 'shared/ui/Link/Link'
import { Button } from 'shared/ui/Button/Button'
import { config } from 'shared/utils/config/app-config'
import './index.scss'

export function NavList() {
  function goToComments() {
    const commentsSection = document.getElementById(
      config.addingCommentsSection
    )
    if (commentsSection instanceof HTMLElement) {
      commentsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="navlistWrapper">
      {navigation.map(({ id, label, href }) => (
        <Link to={href} key={id} label={label} />
      ))}
      <Button label="Comments" onClick={goToComments} />
    </div>
  )
}
