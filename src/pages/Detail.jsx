import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import axios from 'axios'


export const Detail = () => {

    const { id } = useParams();
    // const { dentists } = useContext(GlobalContext);
    const [dentistTarget, setDentistTarget] = useState({});

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => setDentistTarget(response.data))
            .catch(e => console.log(e));
    }, []);

    return (
        <main>
            <h2 className='text-center py-3'>Dentist Detail</h2>
            <div className="container">
                <table className="table m-3">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{dentistTarget.name}</td>
                            <td>{dentistTarget.email}</td>
                            <td>{dentistTarget.phone}</td>
                            <td>{dentistTarget.website}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}


