import React from 'react'
import '../css/style.css'
import red from '../assets/images/red.jpeg';

const Pelicula = () => {
  return (
    <>
     <li data-image={red} data-title="Ant-Man"
                    data-description="Es una película increíble, entre la acción y la emoción..." data-dates="02/01/2020">
                    <figure>
                        <img src={red} alt="affiche de film" />
                        <figcaption>
                            <h2>
                                <i className="material-icons" aria-hidden="true"></i>
                                Información

                            </h2>
                        </figcaption>

                    </figure>
                </li> 
    </>
  )
}

export default Pelicula