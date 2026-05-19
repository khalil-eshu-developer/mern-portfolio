const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap');

  *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
  html { scroll-behavior: smooth; }

  :root {
    --blue: #4da8ff;
    --cyan: #00e5ff;
    --dark: #050810;
    --card: rgba(15,25,45,0.55);
    --border: rgba(77,168,255,0.15);
    --text-muted: #8aaccc;
  }

  #kk-root {
    font-family: 'Space Grotesk', sans-serif;
    background: var(--dark);
    color: #e0e0e0;
    overflow-x: hidden;
  }

  #kk-canvas { position:fixed; inset:0; z-index:0; }

  .kk-cursor {
    width:20px; height:20px;
    border:2px solid var(--blue);
    border-radius:50%;
    position:fixed;
    pointer-events:none;
    z-index:9999;
    transform:translate(-50%,-50%);
    transition:transform .1s;
    animation:cursorPulse 2s infinite;
  }
  .kk-cursor-dot {
    width:6px; height:6px;
    background:var(--blue);
    border-radius:50%;
    position:fixed;
    pointer-events:none;
    z-index:9999;
    transform:translate(-50%,-50%);
  }
  @keyframes cursorPulse {
    0%,100%{box-shadow:0 0 10px rgba(77,168,255,.5);}
    50%{box-shadow:0 0 25px rgba(77,168,255,.8);}
  }

  .kk-nav {
    position:fixed; top:0; left:0; width:100%;
    z-index:100;
    padding:.9rem 3rem;
    display:flex; justify-content:space-between; align-items:center;
    background:rgba(5,8,16,.85);
    backdrop-filter:blur(25px);
    border-bottom:1px solid var(--border);
    transition:padding .3s, box-shadow .3s;
  }
  .kk-nav.scrolled { padding:.6rem 3rem; box-shadow:0 5px 30px rgba(0,0,0,.5); }
  .kk-logo {
    font-family:'Syne',sans-serif;
    font-size:1.5rem; font-weight:800;
    background:linear-gradient(135deg,#4da8ff,#00e5ff,#7cb8ff);
    -webkit-background-clip:text; -webkit-text-fill-color:transparent;
    animation:logoGlow 3s infinite;
  }
  @keyframes logoGlow{0%,100%{filter:brightness(1);}50%{filter:brightness(1.3);}}
  .kk-nav-links { display:flex; gap:2rem; list-style:none; }
  .kk-nav-links a {
    color:#8ab4e0; text-decoration:none; font-size:.9rem; font-weight:500;
    position:relative; padding:.4rem 0; transition:color .3s;
  }
  .kk-nav-links a::after {
    content:''; position:absolute; bottom:0; left:0;
    width:0; height:2px; background:var(--blue); transition:width .3s;
  }
  .kk-nav-links a:hover { color:#fff; }
  .kk-nav-links a:hover::after { width:100%; }

  .kk-section {
    min-height:100vh; padding:7rem 3rem 3rem;
    display:flex; align-items:center;
    position:relative; z-index:10;
  }
  .kk-container { max-width:1200px; margin:0 auto; width:100%; }

  .kk-section-title {
    font-family:'Syne',sans-serif;
    font-size:clamp(2rem,4vw,3rem); font-weight:800;
    margin-bottom:3rem;
    background:linear-gradient(135deg,#fff,#4da8ff,#00e5ff);
    -webkit-background-clip:text; -webkit-text-fill-color:transparent;
    display:inline-block; position:relative;
  }
  .kk-section-title::after {
    content:''; position:absolute; bottom:-10px; left:0;
    width:60%; height:3px;
    background:linear-gradient(90deg,#4da8ff,transparent);
    border-radius:10px;
  }

  #home { justify-content:center; text-align:center; }
  .kk-hero-box {
    background:rgba(10,15,30,.5);
    backdrop-filter:blur(20px);
    border:1px solid rgba(77,168,255,.2);
    border-radius:30px;
    padding:4rem 3rem;
    max-width:850px;
    animation:floatIn 1.2s ease-out;
  }
  @keyframes floatIn{from{opacity:0;transform:translateY(50px);}to{opacity:1;transform:translateY(0);}}

  .kk-avatar {
    width:140px; height:140px; border-radius:50%;
    background:linear-gradient(135deg,#0d1b33,#162744);
    border:3px solid var(--blue);
    margin:0 auto 1.5rem;
    display:flex; align-items:center; justify-content:center;
    font-size:4rem;
    box-shadow:0 0 50px rgba(77,168,255,.4), inset 0 0 30px rgba(77,168,255,.1);
    animation:avatarPulse 3s infinite; position:relative; overflow:hidden;
  }
  @keyframes avatarPulse{0%,100%{box-shadow:0 0 50px rgba(77,168,255,.4);}50%{box-shadow:0 0 80px rgba(77,168,255,.7);}}

  .kk-badge {
    display:inline-block;
    background:rgba(77,168,255,.1);
    border:1px solid rgba(77,168,255,.3);
    padding:.6rem 1.8rem; border-radius:40px;
    font-size:.85rem; font-weight:600; letter-spacing:2px;
    color:var(--blue); margin-bottom:1.5rem;
    text-transform:uppercase;
    animation:badgeGlow 2s infinite;
  }
  @keyframes badgeGlow{0%,100%{border-color:rgba(77,168,255,.3);}50%{border-color:rgba(77,168,255,.7);}}

  .kk-hero-h1 {
    font-family:'Syne',sans-serif;
    font-size:clamp(2.5rem,6vw,4.5rem); font-weight:800;
    margin-bottom:1rem; line-height:1.1;
    background:linear-gradient(135deg,#fff 0%,#4da8ff 50%,#00e5ff 100%);
    -webkit-background-clip:text; -webkit-text-fill-color:transparent;
    background-size:200% 200%; animation:textShimmer 3s infinite;
  }
  @keyframes textShimmer{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}

  .kk-typing {
    font-size:1.3rem; color:#7cb8ff;
    margin:1.2rem 0 2rem; min-height:2rem;
  }
  .kk-typing::after { content:'|'; animation:blink .7s infinite; color:var(--blue); }
  @keyframes blink{0%,100%{opacity:1;}50%{opacity:0;}}

  .kk-cta { display:flex; gap:1.2rem; justify-content:center; flex-wrap:wrap; }

  .kk-btn {
    padding:.9rem 2.2rem; border-radius:50px;
    text-decoration:none; font-weight:600; font-size:.95rem;
    transition:all .3s; display:inline-flex; align-items:center; gap:.5rem;
    position:relative; overflow:hidden; border:none; cursor:pointer;
  }
  .kk-btn-primary {
    background:linear-gradient(135deg,#0066cc,#4da8ff);
    color:#fff; box-shadow:0 8px 30px rgba(77,168,255,.3);
  }
  .kk-btn-primary:hover { transform:translateY(-4px); box-shadow:0 15px 40px rgba(77,168,255,.5); }
  .kk-btn-outline {
    border:2px solid rgba(255,255,255,.2) !important;
    color:#fff; background:transparent;
  }
  .kk-btn-outline:hover { border-color:var(--blue) !important; background:rgba(77,168,255,.1); transform:translateY(-4px); }

  .kk-about-grid { display:grid; grid-template-columns:1fr 1fr; gap:4rem; align-items:center; }
  .kk-about-text p { font-size:1.05rem; line-height:1.9; color:#9ab8d8; margin-bottom:2rem; text-align:justify; }
  .kk-highlight { color:var(--blue); font-weight:600; }
  .kk-quick-info { display:grid; grid-template-columns:1fr 1fr; gap:1.2rem; }
  .kk-info-card {
    background:var(--card); backdrop-filter:blur(15px);
    border:1px solid var(--border); padding:1.5rem; border-radius:15px;
    text-align:center; transition:.3s; cursor:default;
  }
  .kk-info-card:hover { transform:translateY(-8px); border-color:rgba(77,168,255,.4); box-shadow:0 15px 40px rgba(0,0,0,.4); }
  .kk-info-card .ic-icon { font-size:2rem; margin-bottom:.8rem; }
  .kk-info-card h4 { font-size:.75rem; color:#5a80a0; text-transform:uppercase; letter-spacing:1.5px; margin-bottom:.4rem; }
  .kk-info-card p { font-weight:600; color:#c0d8f0; font-size:.95rem; }

  .kk-skills-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:2rem; }
  .kk-skill-cat {
    background:var(--card); backdrop-filter:blur(15px);
    border:1px solid rgba(77,168,255,.1); border-radius:20px; padding:2rem; transition:all .4s;
  }
  .kk-skill-cat:hover { border-color:rgba(77,168,255,.4); transform:translateY(-10px); box-shadow:0 25px 50px rgba(0,0,0,.5); }
  .kk-skill-cat h3 { font-size:1.2rem; margin-bottom:1.5rem; color:var(--blue); display:flex; align-items:center; gap:.6rem; }
  .kk-tags { display:flex; flex-wrap:wrap; gap:.7rem; }
  .kk-tag {
    background:rgba(77,168,255,.08); border:1px solid rgba(77,168,255,.2);
    padding:.5rem 1.2rem; border-radius:25px; font-size:.85rem; font-weight:500;
    color:#a0c8f0; transition:.3s; cursor:default;
  }
  .kk-tag:hover { background:rgba(77,168,255,.25); color:#fff; transform:scale(1.05); border-color:var(--blue); }

  .kk-proj-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(340px,1fr)); gap:2.5rem; }
  .kk-proj-card {
    background:var(--card); backdrop-filter:blur(15px);
    border:1px solid rgba(77,168,255,.1); border-radius:20px; overflow:hidden; transition:all .4s;
  }
  .kk-proj-card:hover { border-color:rgba(77,168,255,.3); transform:translateY(-12px); box-shadow:0 30px 60px rgba(0,0,0,.6); }
  .kk-proj-img {
    height:220px; background:linear-gradient(135deg,#0d1b33,#1a3050);
    display:flex; align-items:center; justify-content:center; font-size:4rem;
    position:relative; overflow:hidden;
  }
  .kk-proj-img::after {
    content:''; position:absolute; inset:0;
    background:linear-gradient(45deg,transparent,rgba(77,168,255,.1),transparent);
    animation:projShine 3s infinite;
  }
  @keyframes projShine{0%{transform:translateX(-100%);}100%{transform:translateX(100%);}}
  .kk-proj-info { padding:1.8rem; }
  .kk-proj-info h3 { font-size:1.3rem; margin-bottom:.8rem; color:#fff; }
  .kk-proj-info p { color:#8aaccc; font-size:.9rem; line-height:1.7; margin-bottom:1.2rem; }
  .kk-proj-tech { display:flex; flex-wrap:wrap; gap:.5rem; margin-bottom:1.5rem; }
  .kk-proj-tech span {
    background:rgba(77,168,255,.12); padding:.35rem .9rem; border-radius:15px;
    font-size:.78rem; color:#8ab8e0; border:1px solid rgba(77,168,255,.2);
  }
  .kk-proj-links { display:flex; gap:1.5rem; }
  .kk-proj-links a {
    color:var(--blue); text-decoration:none; font-weight:600; font-size:.9rem;
    transition:.3s; display:flex; align-items:center; gap:.4rem;
  }
  .kk-proj-links a:hover { color:#fff; transform:translateX(5px); }

  .kk-edu-grid { display:grid; grid-template-columns:1fr 1fr; gap:2.5rem; }
  .kk-card {
    background:var(--card); backdrop-filter:blur(15px);
    border:1px solid rgba(77,168,255,.1); border-radius:20px; padding:2.5rem; transition:.3s;
  }
  .kk-card:hover { border-color:rgba(77,168,255,.3); }
  .kk-card h3 { font-size:1.3rem; color:var(--blue); margin-bottom:2rem; display:flex; align-items:center; gap:.8rem; }
  .kk-timeline {
    padding-left:2rem; border-left:2px solid rgba(77,168,255,.3);
    position:relative; transition:.3s;
  }
  .kk-timeline:hover { border-left-color:var(--blue); }
  .kk-timeline::before {
    content:''; position:absolute; left:-7px; top:8px;
    width:12px; height:12px; background:var(--blue); border-radius:50%;
    box-shadow:0 0 15px rgba(77,168,255,.5);
  }
  .kk-timeline h4 { color:#fff; font-size:1.05rem; margin-bottom:.3rem; }
  .kk-timeline .inst { color:#7ca8d0; font-size:.9rem; margin-bottom:.3rem; }
  .kk-timeline .yr { color:#4a7090; font-size:.8rem; font-weight:600; margin-bottom:.5rem; }
  .kk-timeline p { color:#8aa8c8; font-size:.85rem; line-height:1.6; }

  .kk-contact-grid { display:grid; grid-template-columns:1fr 1fr; gap:3rem; }
  .kk-contact-items { display:flex; flex-direction:column; gap:1.5rem; }
  .kk-contact-item {
    display:flex; align-items:center; gap:1.2rem; padding:1.2rem;
    background:var(--card); backdrop-filter:blur(15px); border-radius:15px;
    border:1px solid var(--border); transition:.3s;
  }
  .kk-contact-item:hover { border-color:rgba(77,168,255,.3); transform:translateX(10px); }
  .kk-contact-item .ci-icon { font-size:1.5rem; width:45px; text-align:center; }
  .kk-contact-item .label { font-size:.75rem; color:#5a80a0; text-transform:uppercase; letter-spacing:1.5px; }
  .kk-contact-item .value { color:#c0d8f0; font-weight:500; font-size:.95rem; }
  .kk-socials { display:flex; gap:1.2rem; margin-top:1rem; }
  .kk-social {
    width:55px; height:55px; border-radius:50%;
    background:rgba(77,168,255,.08); border:1px solid rgba(77,168,255,.2);
    display:flex; align-items:center; justify-content:center;
    font-size:1.3rem; text-decoration:none; color:var(--blue); transition:.4s;
  }
  .kk-social:hover { background:linear-gradient(135deg,#4da8ff,#0066cc); color:#fff; transform:translateY(-6px) rotate(360deg); box-shadow:0 10px 30px rgba(77,168,255,.4); }
  .kk-contact-msg {
    background:var(--card); backdrop-filter:blur(15px);
    border:1px solid var(--border); border-radius:20px; padding:2.5rem;
    display:flex; flex-direction:column; gap:1.5rem; justify-content:center;
  }
  .kk-contact-msg h3 { font-size:1.5rem; color:#fff; }
  .kk-contact-msg p { color:#8aa8c8; line-height:1.7; }
  .kk-accent { color:var(--blue); }

  .kk-footer {
    text-align:center; padding:2.5rem;
    background:rgba(5,8,16,.9); border-top:1px solid rgba(77,168,255,.1);
    font-size:.85rem; color:#4a7090; position:relative; z-index:10;
  }
  .kk-heart { color:#ff4d6a; animation:heartBeat 1s infinite; display:inline-block; }
  @keyframes heartBeat{0%,100%{transform:scale(1);}50%{transform:scale(1.2);}}

  .kk-particle-badge {
    position:fixed; bottom:20px; right:20px;
    background:rgba(10,15,30,.7); backdrop-filter:blur(10px);
    padding:.5rem 1rem; border-radius:20px; font-size:.75rem; color:var(--blue);
    z-index:50; border:1px solid rgba(77,168,255,.2);
  }

  @media(max-width:768px){
    .kk-nav { padding:1rem 1.5rem; }
    .kk-nav-links { display:none; }
    .kk-section { padding:5rem 1.5rem 2rem; }
    .kk-about-grid,.kk-edu-grid,.kk-contact-grid { grid-template-columns:1fr; }
    .kk-hero-box { padding:2rem 1.5rem; }
    .kk-proj-grid { grid-template-columns:1fr; }
  }
`;

export default CSS;
