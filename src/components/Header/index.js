import { Link } from "react-router-dom";
import "./header.css";

function Header() {
    return (
        <header>
            <Link to="/" className="logo">KFilmes</Link>
            <div className="nav-links">
                <Link to="/favoritos" className="favoritos">Salvos</Link>
                <Link to="/sobre" className="favoritos">Sobre</Link>
            </div>
        </header>
    );
}

export default Header;