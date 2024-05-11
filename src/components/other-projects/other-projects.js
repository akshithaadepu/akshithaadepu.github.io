import * as React from "react"
import Parser from "html-react-parser"
import "./other-projects.scss"

const otherProjectsData = [
  {
    name: "Twitter Engine Simulator",
    url: "https://github.com/akshithaadepu/Twitter-Simulator",
    description:
      "Developed a scalable Twitter-like engine using the Actor Model and WebSocket, with a JSON API for real-time tweet processing and interactions. Achieved a rapid 0.89 ms response time, supporting 10,000 concurrent users and tested up to 90,000 users.<br> <a class='small' href='https://github.com/akshithaadepu/Twitter-Simulator'>👨🏻‍💻Github Source Code👨🏻‍💻</a>",
    used: [
      { thing: "Erlang" },
      { thing: "Actor Model" },
      { thing: "WebSocket" },
      { thing: "JSON APIs" },
    ],
  },
  {
    name: "Detection of Dementia",
    url: "https://github.com/akshithaadepu/Dementia-Detection",
    description:
      "Designed and implemented a full-stack web app on AWS for dementia care, featuring ML-driven analysis and personalized recommendations. Integrated video conferencing significantly enhanced patient well-being by 30% upon deployment in a nursing home.<br> <a class='small' href='https://github.com/akshithaadepu/Dementia-Detection'>👨🏻‍💻Github Source Code👨🏻‍💻</a>",
    used: [
      { thing: "Python" },
      { thing: "Machine Learning" },
      { thing: "Django" },
      { thing: "React" },
      { thing: "AWS" },
    ],
  },
  {
    name: "Driver Fatigue Detection",
    url: "https://github.com/akshithaadepu/Driver-Fatigue-Detection",
    description:
      "Engineered an AI system with computer vision and machine learning to detect driver drowsiness, achieving 90% accuracy. Integrated into a web app for real-time monitoring and alerts, it contributed to a 25% reduction in fatigue-related transportation incidents.<br> <a class='small' href='https://github.com/akshithaadepu/Driver-Fatigue-Detection'>👨🏻‍💻Github Source Code👨🏻‍💻</a>",
    used: [
      { thing: "Python" },
      { thing: "Machine Learning" },
      { thing: "Django" },
      { thing: "React" },
    ],
  },
  {
    name: "DevConnector: Social Network for developers",
    url: "",
    description:
      "Developed a MERN stack social network with over 25,000 users, enhanced by ML models for behavior analysis, post recommendations, and sentiment analysis. Features real-time updates using Web Sockets, achieving 95% user satisfaction.",
    used: [
      { thing: "MongoDB" },
      { thing: "Express.js" },
      { thing: "React" },
      { thing: "Node.js" },
      { thing: "JWT" },
      { thing: "Redux" },
    ],
  },
]

const FeaturedProjects = () => (
  <section className="section other-projects">
    <div className="section__title">Projects</div>
    <div className="section__content">
      {otherProjectsData.map(project => (
        <div className="project">
          <div className="project__name">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="arrow-link"
            >
              {project.name}
            </a>
          </div>
          <p>{Parser(project.description)}</p>
          <div className="project__used">
            {project.used.map(item => (
              <span className="project__used__item">{item.thing}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default FeaturedProjects
