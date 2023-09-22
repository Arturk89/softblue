import './index.scss'

export function MainLayout({ children }: { children: React.ReactNode }) {
  return <main className="main">{children}</main>
}
