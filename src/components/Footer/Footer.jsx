import React from 'react'

export const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <div className="bg-dark">
            <footer className="py-3">
                <p className="text-center text-light pt-3 mx-3">&copy; { year } Digital House, Inc</p>
            </footer>
        </div>
    )
}
