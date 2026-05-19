import useTyping from "../hooks/useTyping";
import { TYPING_TEXTS } from "../data/data";
import profileImg from '../image/profile.jpg'

function Hero({ scrollTo }) {
  const typing = useTyping(TYPING_TEXTS);

  return (
    <section className="kk-section" id="home">
      <div className="kk-hero-box">
        <div className="kk-avatar">
          <img 
            src={profileImg} 
            alt="Khalil Khan" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} 
          />
        </div>
        <div className="kk-badge">🚀 Full Stack MERN Developer</div>
        <h1 className="kk-hero-h1">Khalil Khan</h1>
        <div className="kk-typing">{typing}</div>
        <div className="kk-cta">
          <a
            href="#contact"
            className="kk-btn kk-btn-primary"
            onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
          >
            🚀 Hire Me
          </a>
          <a
            href="#projects"
            className="kk-btn kk-btn-outline"
            onClick={(e) => { e.preventDefault(); scrollTo("projects"); }}
          >
            🔗 My Work
          </a>
          <a
            href="https://github.com/khalil-eshu-developer"
            target="_blank"
            rel="noreferrer"
            className="kk-btn kk-btn-outline"
          >
            💻 GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;