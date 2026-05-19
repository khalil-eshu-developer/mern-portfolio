function Education() {
  return (
    <section className="kk-section" id="education">
      <div className="kk-container">
        <h2 className="kk-section-title">Education & Certifications</h2>
        <div className="kk-edu-grid">
          <div className="kk-card">
            <h3>🎓 Education</h3>
            <div className="kk-timeline">
              <h4>ICS (Intermediate in Computer Science)</h4>
              <p className="inst">Pakistan</p>
              <p className="yr">Completed</p>
              <p>Focused on computer science fundamentals, programming concepts, database basics, and mathematics. Built strong foundation for software development career.</p>
            </div>
          </div>
          <div className="kk-card">
            <h3>🏆 Certifications</h3>
            <div className="kk-timeline">
              <h4>Full Stack Web Development</h4>
              <p className="inst">Sina Institute</p>
              <p className="yr">2025</p>
              <p>Completed intensive full stack web development course covering HTML5, CSS3, JavaScript, React.js, Node.js, Express.js, and MongoDB with hands-on projects.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
