import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./favorito.css";

function Favorito() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const myList = localStorage.getItem("@kfilmes");

        setFilmes(JSON.parse(myList) || []);

    }, []);

    function deleteFilm(id) {
        let filmfilter = filmes.filter((filme) => {
            return (filme.id !== id)
        });

        setFilmes(filmfilter);
        localStorage.setItem("@kfilmes", JSON.stringify(filmfilter));
        toast.success("Filme removido com sucesso");
    }

    return (
        <div className="my-films">
            <h1>Filmes Salvos</h1>

            {filmes.length === 0 && <span className="empty-message">Você não possui nenhum filme salvo 😞 </span>}

            <ul>
                {filmes.map((filme)=>{
                    return (
                        <li key={filme.id}>
                            <span>{filme.nome}</span>
                            <div>
                                <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                                <button onClick={() => deleteFilm(filme.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>

        </div>
    );
}

export default Favorito;