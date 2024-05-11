import * as React from "react"
import "./intro.scss"

const introData = {
  title: "Hello! ",
  beforeName: "I'm ",
  name: "Akshitha Adepu",
  afterName:
    ", a tech-savvy software engineer focused on designing innovative full-stack architectures and crafting intuitive user experiences.",
  contact: "Get in touch ",
  email: "akshitha.adepu@outlook.com",
  mailTo: "mailto:akshitha.adepu@outlook.com",
}
const Intro = () => {
  const [isHovering, setIsHovering] = React.useState(false)
  const onMouseOver = _ => {
    setIsHovering(true)
  }
  const onMouseOut = _ => {
    setIsHovering(false)
  }

  React.useEffect(() => {
    setTimeout(() => {
      setIsHovering(true)
      setTimeout(() => {
        setIsHovering(false)
      }, 2000)
    }, 1000)
  }, [])

  return (
    <header className="intro">
      <h1 className="intro__hello">
        {introData.title}
        <span
          className={
            isHovering
              ? "emoji wave-hand animated wave"
              : "emoji wave-hand animated"
          }
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          onFocus={onMouseOver}
          onBlur={onMouseOut}
          role="button"
          tabIndex={0}
          aria-label="wave hand"
        ></span>
      </h1>

      <h2 className="intro__tagline">
        {introData.beforeName}
        <span className="name">{introData.name}</span>
        {introData.afterName}
        <span className="emoji technologist"></span>
      </h2>

      <h3 className="intro__contact">
        <span>{introData.contact}</span>
        <span className="emoji pointer"></span>
        <span>
          <a href={introData.mailTo} className="highlight-link">
            {introData.email}
          </a>
        </span>
      </h3>
    </header>
  )
}

export default Intro
