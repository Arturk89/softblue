import logo from '../../../../../../assets/Header/logo.png'
import './logo.scss'

export function Logo() {
  return (
    <div className="logo">
      <img className="logo__img" src={logo} alt="logo" />
    </div>
  )
}
