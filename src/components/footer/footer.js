import * as React from "react"
import "./footer.scss"

const socialData = [
  {
    title: "email",
    url: "mailto:akshitha.adepu@outlook.com",
  },
  {
    title: "linkedin",
    url: "https://www.linkedin.com/in/akshithaadepu/",
  },
  {
    title: "github",
    url: "https://github.com/akshithaadepu",
  },
  {
    title: "leetcode",
    // url: "https://leetcode.com/u/akshithaadepu/",
  },
]
const Footer = () => (
  <footer className="footer">
    <div className="footer__copyright">
      <div className="bottom">
        <span>Akshitha Adepu</span>
        <img className="emoji" src="./images/emojis/rockon.png" alt="emoji" />
        <span>2024</span>
      </div>
      <div className="bottom credits"></div>
    </div>
    <div className="footer__links">
      {socialData.map(social => (
        <a
          href={social.url}
          target="_blank"
          rel="noreferrer"
          title="{{link.title}}"
        >
          <span className="text">{social.title}</span>
        </a>
      ))}
    </div>
  </footer>
)

export default Footer
