/* eslint-disable jsx-a11y/anchor-is-valid */
import './Header.scss';

function Header() {
  return (
    <nav className="navbar">
      <a href="/">
        <strong className="logo">Amael.dev</strong>
      </a>

      <input type="checkbox" id="check" />
      <label htmlFor="check" className="navbar__burguer__menu">
        <i className="fa-solid fa-bars" id="burger__icon" />
      </label>
      <ul className="navbar__ul">
        <li className="navbar__li">
          <a className="navbar__a" href="#home">
            Accueil
          </a>
        </li>
        <li className="navbar__li">
          <a className="navbar__a" href="#about">
            A propos
          </a>
        </li>
        <li className="navbar__li">
          <a className="navbar__a" href="#projects">
            Projets
          </a>
        </li>
        <li className="navbar__li">
          <a className="navbar__a" href="#skills">
            Compétences
          </a>
        </li>
        <li className="navbar__li">
          <a className="navbar__a" href="#contact">
            Contact
          </a>
        </li>
        <li className="navbar__li">
          <a className="navbar__a" href="/src/CV.pdf" target="_blank">
            CV
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
