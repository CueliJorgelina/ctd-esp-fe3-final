import React, { useCallback, useEffect, useState } from 'react'
import { Card } from '../components/Card/Card';

export const Favs = () => {

    // const favoritesDentists = JSON.parse(localStorage.getItem('favorites')) || [];

    const [favoritesDentists, setFavoritesDentists] = useState([]);

    useEffect(() => {
        setFavoritesDentists(JSON.parse(localStorage.getItem('favorites')));
    }, []);

    return (
        <main>
            <h2 className='text-center fs-1 py-2'>Dentist Favorities</h2>
            <div className='container d-flex flex-wrap gap-3 justify-content-center my-2'>
                {
                    favoritesDentists.length > 0
                        ?
                        favoritesDentists.map(dentist => {
                            return <Card
                                key={dentist.id}
                                name={dentist.name}
                                username={dentist.username}
                                id={dentist.id}
                            />
                        })
                        : <h3>Is empty...</h3>
                }
            </div>
        </main>
    )
}
