import { INFO_CARDS } from "../data/data";

function About() {
  return (
    <section className="kk-section" id="about">
      <div className="kk-container">
        <h2 className="kk-section-title">About Me</h2>
        <div className="kk-about-grid">
          <div className="kk-about-text">
            <p>
              I am a <span className="kk-highlight">motivated and enthusiastic student</span> with a background in{" "}
              <span className="kk-highlight">ICS (Intermediate in Computer Science)</span>. I have a strong passion
              for coding and technology, which has driven me to develop solid skills in web development. On the{" "}
              <span className="kk-highlight">frontend</span> side, I am proficient in{" "}
              <span className="kk-highlight">HTML5, CSS, JavaScript, and React.js</span>, and I have hands-on
              experience building dynamic and responsive user interfaces.
            </p>
            <p>
              I specialize in full-stack development using the <span className="kk-highlight">MERN stack</span> —{" "}
              <span className="kk-highlight">MongoDB, Express.js, React, and Node.js</span> — with strong command
              over both frontend and backend development. I enjoy creating clean, user-friendly web applications
              and I am always eager to learn and grow in the ever-evolving world of technology.
            </p>
          </div>
          <div className="kk-quick-info">
            {INFO_CARDS.map((c) => (
              <div className="kk-info-card" key={c.label}>
                <div className="ic-icon">{c.icon}</div>
                <h4>{c.label}</h4>
                <p>{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
