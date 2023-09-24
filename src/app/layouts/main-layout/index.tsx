import './index.scss'

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="main">
      <div className="main__container">{children}</div>
    </main>
  )
}
