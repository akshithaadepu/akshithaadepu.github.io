import * as React from "react"
import "./experience.scss"

const experienceData = [
  {
    company: "Software Engineer",
    roles: [
      {
        position: "University of Florida",
        time: "May 2023 - Present",
        description:
          "Developed a TensorFlow-based CNN model enhancing diagnostic imaging precision; integrated computer vision with Django to boost deployment efficiency by 30%.",
      },
      {
        position: "University of Florida",
        time: "Aug 2022 - Apr 2023",
        description:
          "Led the transition to microservices using Azure, Docker, Kubernetes; enhanced system scalability and reduced deployment times by automating CI/CD pipelines.",
      },
    ],
  },
  {
    company: "Graduate Assistant",
    roles: [
      {
        position: "University of Florida",
        time: "Aug 2023 - Dec 2023",
        description:
          "Designed and implemented an AI and Data Science curriculum; significantly improved student engagement and comprehension through hands-on Python projects.",
      },
    ],
  },
  {
    company: "Software Egnineer Intern",
    roles: [
      {
        position: "JP Morgan Chase & Co.",
        time: "Feb 2022 - Jul 2022",
        description:
          "Enhanced UI and backend for $1M+ transactions, optimized Oracle DB by 40%, and led a secure AWS migration, boosting data security for 200,000+ users",
      },
      {
        position: "JP Morgan Chase & Co.",
        time: "May 2021 - Jul 2021",
        description:
          "Developed a risk management analytics system; streamlined data visualization using Angular and Tableau, leading to a 75% adoption rate by clients.",
      },
    ],
  },
]

const Experience = () => (
  <section className="section experience">
    <div className="section__title">Experience</div>
    <div className="section__content">
      {experienceData.map((company, index) => (
        <div key={index} className="company">
          <div className="company__name">{company.company}</div>
          {company.roles.map((role, roleIndex) => (
            <div key={roleIndex} className="role">
              <div className="role__details">
                <div className="role__position">{role.position}</div>
                <div className="role__time">{role.time}</div>
              </div>
              <div className="role__description">{role.description}</div>
            </div>
          ))}
        </div>
      ))}
      <br />
      <br />
      <a
        href="./AkshithaAdepu_Resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="arrow-link"
      >
        View My Resume
      </a>
    </div>
  </section>
)

export default Experience
