import React, { useState } from 'react'

export const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const onChangeName = (e) => setName(e.target.value);
    const onChangeEmail = (e) => setEmail(e.target.value);

    const submitForm = (e) => {
        e.preventDefault();
        if (name.length < 5 || !email.includes('@')) {
            alert('Por favor verifique su información nuevamente')
            resetInputs();
        } else {
            alert(`Gracias ${name}, te contactaremos cuanto antes vía mail`)
            resetInputs();
        }
    }

    const resetInputs = () => {
        setName('');
        setEmail('');
    }

    return (
        <form onSubmit={submitForm}>
            <div className='text-center'>
                <h2>Want to know more?</h2>
                <p>Send us your questions and we will contact you.</p>
            </div>
            <div className="container d-flex flex-column">
                <div className="mb-2">
                    <label className="form-label">Your name...</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Jorgelina"
                        id='name'
                        name='name'
                        value={name}
                        onChange={onChangeName} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Your email address...</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Jorgelina@example.com"
                        id='email'
                        name='email'
                        value={email}
                        onChange={onChangeEmail} />
                </div>
                <button
                    type="submit"
                    className="btn btn-success align-self-end mb-2">
                    Submit
                </button>
            </div>
        </form>
    )
}
