import { Link } from "react-router-dom";
import "./home.css"

function Header() {
    return (
        <header className="container">
            <Link to="/" className="logo" >KFilmes</Link>
            <Link to="/favoritos" className="favoritos">Meus Filmes</Link>
        </header>
    )
}

export default Header;