function Projects() {
  const projects = [
    {
      featured: true,
      icon: 'fa-tasks',
      title: '📋 Task Manager App',
      desc: 'Full-stack MERN app with CRUD, filters, search. React + Node.js + Express + MongoDB.',
      tech: ['React', 'Node', 'Express', 'MongoDB'],
      github: 'https://github.com/khalil-eshu-developer/task-manager',
      demo: 'https://mern-task-manager-gilt.vercel.app'
    },
    {
      icon: 'fa-cloud-sun',
      title: '🌤️ Weather App',
      desc: 'Real-time weather with 30+ cities. Pakistan & worldwide. Modern glass morphism UI.',
      tech: ['React', 'Node', 'API', 'MongoDB'],
      github: 'https://github.com/khalil-eshu-developer/weather-app',
      demo: 'https://mern-weather-app-psi.vercel.app'
    },
    {
      icon: 'fa-globe',
      title: '🌐 Landing Page',
      desc: 'Responsive landing page with modern design & animations.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/khalil-eshu-developer',
      demo: 'https://khalil-eshu-developer.github.io/landingpage/'
    }
  ]

  return (
    <section id="projects" style={{ minHeight: '100vh', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '3rem', background: 'linear-gradient(135deg, #fff, #4da8ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Featured Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {projects.map((p, i) => (
            <div key={i} style={{ background: 'rgba(15,25,45,0.5)', backdropFilter: 'blur(15px)', border: p.featured ? '1px solid rgba(0,229,255,0.3)' : '1px solid rgba(77,168,255,0.1)', borderRadius: '20px', overflow: 'hidden', position: 'relative' }}>
              {p.featured && <span style={{ position: 'absolute', top: 15, right: 15, background: 'linear-gradient(135deg, #4da8ff, #00e5ff)', padding: '0.3rem 1rem', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 700, color: '#fff', zIndex: 1 }}>⭐ Featured</span>}
              <div style={{ height: 180, background: 'linear-gradient(135deg, #0d1b33, #1a3050)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', color: '#4da8ff' }}>
                <i className={`fas ${p.icon}`}></i>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', marginBottom: '0.8rem' }}>{p.title}</h3>
                <p style={{ color: '#8aaccc', fontSize: '0.9rem', marginBottom: '1rem' }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.2rem' }}>
                  {p.tech.map((t, j) => <span key={j} style={{ background: 'rgba(77,168,255,0.12)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.75rem', color: '#8ab8e0' }}>{t}</span>)}
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href={p.github} target="_blank" rel="noreferrer" style={{ color: '#4da8ff', textDecoration: 'none', fontWeight: 600 }}>💻 Code</a>
                  <a href={p.demo} target="_blank" rel="noreferrer" style={{ color: '#4da8ff', textDecoration: 'none', fontWeight: 600 }}>🔗 Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects