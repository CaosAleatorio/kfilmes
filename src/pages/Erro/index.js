import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 
import './erro.css'; 

function Erro() {
    return (
        <div className="erro-container">
            <FontAwesomeIcon icon={faSadTear} className="erro-icon" />
            <h1 className="erro-title">Erro 404</h1>
            <p className="erro-message">Página não encontrada</p>
            <Link to="/" className="erro-link">Voltar para a página inicial</Link>
        </div>
    );
}

export default Erro;