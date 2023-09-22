import { HeaderWrapper } from './components/HeaderWrapper'
import { TopBar } from './components/topbar/TopBar'
import { MainWrapper } from './components/main/MainWrapper'
import { PersonImage } from './components/PersonImage'
import './index.scss'

export function Header() {
  return (
    <HeaderWrapper>
      <TopBar />
      <div className="mainSection">
        <MainWrapper />
        <PersonImage />
      </div>
    </HeaderWrapper>
  )
}
