import logo from '../../../assets/logo.png'
import './index.scss'

export function Logo() {
  return (
    <div className="logo">
      <img className="logo__img" src={logo} alt="logo" />
    </div>
  )
}
