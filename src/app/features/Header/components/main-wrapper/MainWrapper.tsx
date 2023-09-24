import './main-wrapper.scss'

export function MainWrapper() {
  return (
    <section className="mainWrapper">
      <p className="hello">Hello!</p>
      <p className="introduction">
        I am <span>hrs</span> Pathan <br /> Creative UI/UX Designer
      </p>
      <div className="list">
        <ul>
          <li>1. UI/UX Design</li>
          <li>2. Product Design</li>
          <li>3. Web Design</li>
          <li>4. Front-end Design</li>
        </ul>
      </div>
    </section>
  )
}
