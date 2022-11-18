import bikcraftLogo from '../../assets/bikcraft.svg'

// CSS
import './Header.css'

export const Header = () => {
  return (
    <div className="header">
      <header className="header-container">
        <img src={bikcraftLogo} alt="Logotipo representando a marca Bikcraft"/>

        <nav>
          <ul className="font-1-m">
            <li><a href="#bike">Bicicletas</a></li>
            <li><a href="#security">Seguros</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}