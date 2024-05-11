import * as React from "react"
import "./skills.scss"

const skillsData = {
  languagesTitle: "languages",
  languages: [
    "Python",
    "Java",
    "C",
    "C++",
    "JavaScript",
    "Go",
    "Scala",
    "MATLAB",
  ],
  frameworksTitle: "Database",
  frameworks: [
    "SQL",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Oracle DB",
    "Cassandra",
    "SQLite",
  ],
  toolsTitle: "Frameworks",
  tools: [
    "React",
    "Angular",
    "Redux",
    "Django",
    "Spring Boot",
    "Hibernate",
    "Express.js",
    "jQuery",
    "REST APIs",
    "JWT",
  ],
  designTitle: "Tools",
  design: [
    "AWS",
    "Azure",
    "Kubernetes",
    "Docker",
    "Kafka",
    "PySpark",
    "Tableau",
    "PowerBI",
    "Selenium",
    "JUnit",
    "CI/CD (Jenkins)",
    "Git",
    "Jira",
  ],
}

const Skills = () => (
  <section className="section skills">
    <div className="section__title">Skills</div>
    <div className="section__content">
      <div className="skillz">
        <div className="skillz__category">
          <div className="skillz__category__label">
            {skillsData.languagesTitle}
          </div>
          <ul>
            {skillsData.languages.map(data => (
              <li className="skillz__category__item">{data}</li>
            ))}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">
            {skillsData.frameworksTitle}
          </div>
          <ul>
            {skillsData.frameworks.map(data => (
              <li className="skillz__category__item">{data}</li>
            ))}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.toolsTitle}</div>
          <ul>
            {skillsData.tools.map(data => (
              <li className="skillz__category__item">{data}</li>
            ))}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">
            {skillsData.designTitle}
          </div>
          <ul>
            {skillsData.design.map(data => (
              <li className="skillz__category__item">{data}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default Skills
