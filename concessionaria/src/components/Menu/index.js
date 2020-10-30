import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu()
{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/listagem" className="nav-link">Listagem</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cadastro" className="nav-link">Cadastro</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sobre" className="nav-link">Sobre</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}