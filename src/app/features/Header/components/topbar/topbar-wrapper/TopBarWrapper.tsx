import './index.scss'

export function TopBarWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="topbarWrapper">
      <div className="topbarWrapper__content">{children}</div>
    </div>
  )
}
