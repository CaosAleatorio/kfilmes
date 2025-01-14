import { useNavigate, useParams } from "react-router-dom";
import "./filme.css"
import { useEffect, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify/unstyled";

function Filme() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadMovie() {
            await api.get(`movie/${id}`, {
                params: {
                    api_key: "8c6e66fd772c4d724807f192273e6626",
                    language: "pt-BR",
                }
            })
                .then((response) => {
                    setMovie(response.data);
                    setLoading(false);
                })
                .catch(() => {
                    toast.error("Filme não encontrado");
                    navigate("/", { replace: true });
                    return;
                })
        }
        loadMovie();
        return (() => {
            console.log("componente desmontado");
        })
    }, [id, navigate]);

    function saveMovie() {
        const myList = localStorage.getItem("@kfilmes");
        let savedMovies = JSON.parse(myList) || [];

        const hasMovie = savedMovies.some((saved) => saved.id === movie.id);

        if (hasMovie) {
            toast.info("Filme já está salvo");
            return;
        }

        savedMovies.push(movie);
        localStorage.setItem("@kfilmes", JSON.stringify(savedMovies));
        toast.success("Filme salvo com sucesso");

    }

    if (loading) {
        return (
            <div className="loading-movie">
                <h2>Carregando Filme</h2>
            </div>
        )
    }

    return (
        <div className="movie-info">
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />

            <h3>Sinopse</h3>
            <span>{movie.overview}</span>

            <strong>Nota: {movie.vote_average}</strong>

            <div className="buttons">
                <button onClick={saveMovie}>Salvar</button>
                <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer">Ver no IMDB</a>
                <button>
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${movie.title} Trailer`}>
                        Trailer
                    </a>
                </button>
                <button onClick={() => navigate(-1)}>Voltar</button>

            </div>
        </div>
    )
}

export default Filme;