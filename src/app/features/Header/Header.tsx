import { HeaderWrapper } from './components/Wrapper/HeaderWrapper'
import { TopBar } from './components/topbar/TopBar'
import { MainWrapper } from './components/main/MainWrapper'
import { Image } from './components/image/Image'
import './header.scss'

export function Header() {
  return (
    <HeaderWrapper>
      <TopBar />
      <div className="mainSection">
        <MainWrapper />
        <Image />
      </div>
    </HeaderWrapper>
  )
}
