import React from 'react';
import './sobre.css';

function Sobre() {
    return (
        <div className="sobre-container">
            <h1>Sobre KFilmes</h1>
            <p>
                KFilmes é uma plataforma dedicada a amantes do cinema. Aqui você pode encontrar as últimas novidades, 
                salvar seus filmes favoritos e explorar uma vasta coleção de filmes de diversos gêneros.
            </p>
            <h2>Nosso Objetivo</h2>
            <p>
                Nosso objetivo é fornecer uma experiência de usuário intuitiva e agradável, permitindo que você descubra 
                e salve os filmes que mais ama. 
            </p>
            <h2>Contato</h2>
            <p>
                Se você tiver alguma dúvida ou sugestão, não hesite em nos contatar através do nosso e-mail: 
                <a href="mailto:alexalfai43@gmail.com"> alexalfai43@gmail.com</a>
            </p>
        </div>
    );
}

export default Sobre;