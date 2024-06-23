import logo from '../assets/logo.png';
import '../styles/header.css';
export const Header = () => {
  return (
    <div className="header">
      <img id="logo" src={logo} alt="" />
      <nav className="nav">
        <ul>
          <li>
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">Réglage</a>
          </li>
          <li>
            <a href="#">Communauté</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
