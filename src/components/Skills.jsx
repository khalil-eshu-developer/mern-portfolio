import { SKILLS } from "../data/data";

function Skills() {
  return (
    <section className="kk-section" id="skills">
      <div className="kk-container">
        <h2 className="kk-section-title">Skills & Technologies</h2>
        <div className="kk-skills-grid">
          {SKILLS.map((s) => (
            <div className="kk-skill-cat" key={s.title}>
              <h3>{s.icon} {s.title}</h3>
              <div className="kk-tags">
                {s.tags.map((t) => (
                  <span className="kk-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
