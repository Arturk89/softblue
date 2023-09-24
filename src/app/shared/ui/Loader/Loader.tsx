import { ThreeDots } from 'react-loader-spinner'
import './index.scss'

export function Loader() {
  return (
    <div className="loaderWrapper">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#00bcd4"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  )
}
