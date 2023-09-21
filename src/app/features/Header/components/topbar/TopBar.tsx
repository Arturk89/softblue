import { Logo } from './logo/Logo'
import { NavList } from './main-nav-list/NavList'
import { NavigationWrapper } from './nav-wrapper/NavigationWrapper'
import { TopBarWrapper } from './topbar-wrapper/TopBarWrapper'

export function TopBar() {
  return (
    <TopBarWrapper>
      <Logo />
      <NavigationWrapper>
        <NavList />
      </NavigationWrapper>
    </TopBarWrapper>
  )
}
