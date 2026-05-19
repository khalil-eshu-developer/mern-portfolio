function Contact() {
  return (
    <section className="kk-section" id="contact">
      <div className="kk-container">
        <h2 className="kk-section-title">Get In Touch</h2>
        <div className="kk-contact-grid">
          <div className="kk-contact-items">
            {[
              { icon: "📧", label: "Email Address", value: "nub76116@gmail.com" },
              { icon: "📍", label: "Location", value: "Pakistan" },
              { icon: "💻", label: "GitHub Profile", value: "khalil-eshu-developer" },
            ].map((item) => (
              <div className="kk-contact-item" key={item.label}>
                <div className="ci-icon">{item.icon}</div>
                <div>
                  <div className="label">{item.label}</div>
                  <div className="value">{item.value}</div>
                </div>
              </div>
            ))}
            <div className="kk-socials">
              {[
                { icon: "💻", href: "https://github.com/khalil-eshu-developer", title: "GitHub" },
                { icon: "📧", href: "mailto:nub76116@gmail.com", title: "Email" },
                { icon: "🔗", href: "#", title: "LinkedIn" },
                { icon: "🐦", href: "#", title: "Twitter" },
              ].map((s) => (
                <a
                  key={s.title}
                  href={s.href}
                  className="kk-social"
                  title={s.title}
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="kk-contact-msg">
            <h3>Let's Work Together! 💡</h3>
            <p>
              I'm currently available for freelance opportunities, internships, and exciting projects.
              Whether you need a website, web application, or full-stack solution, I'm here to help!
            </p>
            <p className="kk-accent">✦ Open to collaborate on MERN stack projects</p>
            <a href="mailto:nub76116@gmail.com" className="kk-btn kk-btn-primary">
              📩 Send Email Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
