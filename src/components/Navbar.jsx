import { NAV_LINKS } from "../data/data";

function Navbar({ scrolled, scrollTo }) {
  return (
    <nav className={`kk-nav ${scrolled ? "scrolled" : ""}`}>
      <div className="kk-logo">KK Developer</div>
      <ul className="kk-nav-links">
        {NAV_LINKS.map((n) => (
          <li key={n}>
            <a
              href={`#${n.toLowerCase()}`}
              onClick={(e) => { e.preventDefault(); scrollTo(n.toLowerCase()); }}
            >
              {n}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
