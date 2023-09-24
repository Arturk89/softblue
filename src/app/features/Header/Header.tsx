import { HeaderWrapper } from './components/header-wrapper'
import { TopBar } from './components/topbar/TopBar'
import { MainWrapper } from './components/main-wrapper/MainWrapper'
import { PersonImage } from './components/person-image'
import './index.scss'

export function Header() {
  return (
    <HeaderWrapper>
      <TopBar />
      <div className="mainSection">
        <div className="mainSection__container">
          <MainWrapper />
          <PersonImage />
        </div>
      </div>
    </HeaderWrapper>
  )
}
