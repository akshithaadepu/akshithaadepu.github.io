import * as React from "react"

const backgroundData = {
  title: "Background",
  part1: "I'm currently a Software Engineer at the ",
  part2: "University of Florida's College of Medicine",
  part2Href: "https://med.ufl.edu/",
  part3:
    ", working with a talented team to build innovative solutions for patient care. I recently graduated with a ",
  part4: "Master's in Computer and Information Science",
  part5: " from the ",
  part6: "University of Florida",
  part6Href: "https://www.ufl.edu/",
  line2:
    "As a full-stack engineer, I unify backend and frontend development, harnessing my expertise in cloud computing, data science, and machine learning. I tackle various challenges with web-based solutions, from detecting driver fatigue using machine learning models to creating scalable social networks on the MERN stack. My aim is to deliver efficient, user-friendly applications that are both robust and captivating.",
  line3Part1: "When I'm not in front of a computer screen",
  line3Part2:
    ", I immerse myself in art through painting and sketching, experiment with new recipes in the kitchen, and focus on personal growth",
  line3Part3: ".",
}

const Background = () => (
  <section className="section background">
    <div className="section__title">{backgroundData.title}</div>
    <div className="section__content">
      <p>
        {backgroundData.part1}
        <a
          className="underline-link"
          href={backgroundData.part2Href}
          target="_blank"
          rel="noreferrer"
        >
          {backgroundData.part2}
        </a>
        {backgroundData.part3}
        <strong>{backgroundData.part4}</strong>
        {backgroundData.part5}
        <a
          className="underline-link"
          href={backgroundData.part6Href}
          target="_blank"
          rel="noreferrer"
        >
          {backgroundData.part6}
        </a>
        .
      </p>
      <p>{backgroundData.line2}</p>
      <p>
        <strong>{backgroundData.line3Part1}</strong>
        {backgroundData.line3Part2}
        {backgroundData.line3Part3}
      </p>
    </div>
  </section>
)

export default Background
