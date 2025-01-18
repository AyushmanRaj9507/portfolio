export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
          I am Ayushman, a second-year Electrical Engineering student at NIT Allahabad.
          Focusing on full-stack web development to enhance skills and create innovative applications.
          <hr></hr>
          Skills & Technologies:
          <li>Front-end: React.js, Redux, Node.js, HTML, CSS, Tailwind CSS, JavaScript</li>
          <li>Back-end:  Node.js, Express.js, MongoDB, MySQL, JWT</li>
          <li>Deployment & Version Control :    vercel, Github, Render</li>
          <li>Tools :    MongoDb-Compass, Atlas, Postman, Hopscotch</li>
          </p>
          <p className="hero--section-description">
          Focus Areas:
          Currently deepening knowledge in Data Structures and Algorithms (DSA), with a special interest in dynamic programming and graph theory.
          Aiming to improve coding skills through consistent problem-solving and project development.
          <hr></hr>
          Learning Mindset:
          Quick learner with a passion for continuous learning and self-improvement in technology.
          </p>
        </div>
      </div>
    </section>
  );
}
