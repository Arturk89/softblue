import { Logo } from './logo'
import { NavList } from './main-nav-list'
import { NavigationWrapper } from './nav-wrapper'
import { TopBarWrapper } from './topbar-wrapper'

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
