import React, { useCallback, useEffect, useState } from 'react'
import img from './doc.png'
import { Link } from 'react-router-dom';

export const Card = ({ name, username, id }) => {

    const [isFavorite, setIsFavorite] = useState(false);

    const addFavorities = () => {

        const favoritesDentists = JSON.parse(localStorage.getItem('favorites'));        

        if (favoritesDentists) {
            const alreadyInFavorites = favoritesDentists.some(dentist => dentist.id === id);
            let favs = [];
            if (alreadyInFavorites) {
                favs = favoritesDentists.filter(dentist => dentist.id !== id);
                alert('El dentista ha sido eliminado de favoritos!')
            } else {
                favs = [...favoritesDentists, { name, username, id }];
                alert('El dentista ha sido agregado a favoritos!')
            }
            localStorage.setItem('favorites', JSON.stringify(favs));
        } else {
            localStorage.setItem('favorites', JSON.stringify([{ name, username, id }]))
            
        }
        dentistFavorite();
    }

    const dentistFavorite = useCallback(() => {
        const favoritesDentists = JSON.parse(localStorage.getItem('favorites'));
        if (favoritesDentists) {
            const alreadyInFavorites = favoritesDentists.some(dentist => dentist.id === id);
            setIsFavorite(alreadyInFavorites);
        }
    }, [id]);

    useEffect(() => {
        dentistFavorite();
    }, [dentistFavorite]);

    return (
        <div className="card shadow-lg border-4">
            <Link to={`/dentist/${id}`} className='text-decoration-none'>
                <img src={img} className="card-img-top" alt="dentist" />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-decoration-underline text-black text-center">{username}, {name} </h5>
                </div>
            </Link>
            {
                isFavorite
                    ?
                    <button className="btn btn-danger w-25 align-self-center mb-2 mt-auto" onClick={addFavorities}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-heart-fill"
                            viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                        </svg>
                    </button>
                    :
                    <button className="btn btn-danger w-25 align-self-center mb-2 mt-auto" onClick={addFavorities}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-heart"
                            viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                    </button>
            }
        </div>
    )
}
