import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Card } from '../components/Card/Card'

export const Home = () => {

    const { dentists } = useContext(GlobalContext);

    return (
        <main>
            <h2 className='text-center fs-1 py-2'>Home</h2>
            <div className='container d-flex flex-wrap gap-3 justify-content-center py-2'>
                {
                    dentists.map(dentist => {
                        return <Card
                                    key={dentist.id}
                                    name={dentist.name}
                                    username={dentist.username}
                                    id={dentist.id}
                                />
                    })
                }
            </div>
        </main>
    )
}
