import { useEffect, useState } from "react";
import api from "../../services/api";
import "./home.css"
import { Link } from "react-router-dom";

function Home() {

    const [filmes, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "8c6e66fd772c4d724807f192273e6626",
                    language: "pt-BR",
                    page: 1,
                }
            })
            setFilme(response.data.results.slice(0, 10));
            setLoading(false);
        };
        loadFilmes();
    }, []);

    if (loading) {
        return (
            <div className="filme-loading">
                <h2>Carregando Filme</h2>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme)=>{
                    return (
                        <article  key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} alt={filme.title}/>
                            <footer>
                                <p>{filme.overview}</p>
                                <Link to={`/filme/${filme.id}`}>Acessar</Link>
                            </footer>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;