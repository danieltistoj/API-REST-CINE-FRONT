import React from 'react'
import '../css/style.css'
import Pelicula from '../componentes/pelicula'

const Cartelera = () => {
    return (
        <>
            <header>
                <img src="./asset/netflix_official_logo_icon_168085.ico" alt="logo netflix" />
                <h1>Películas en Cartelera</h1>
                <span className="material-icons md-48">dark_mode</span>
            </header>

            <main>
                <h2>Para más información puedes llenar el formulario del final</h2>
                <h3 className="third title" />Todos los meses disfruta de todas las novedades del cine <br />
                A continuación te ofrecemos todos los clásicos del Cine <br />

                <ul className="grid-picture-large">

                    <Pelicula />

                </ul>

                <a href="formulaire.html">Click</a>

                <div className="parent-modale" role="dialog" aria-label="true">
                    <figure className="modale">
                        <button aria-label="closed" >
                            <span className="material-icons md-light md-36">clear</span>
                        </button>
                        <img className="image" src="https://via.placeholder.com/500" alt="picture" />
                        <figcaption className="desc">
                            <h3>title</h3>
                            <p> </p>
                            <time>Years : </time>
                        </figcaption>
                    </figure>
                </div>

            </main>

            <footer>
                <p>© - Streaming - 2022</p>
            </footer>

        </>
    )
}

export default Cartelera