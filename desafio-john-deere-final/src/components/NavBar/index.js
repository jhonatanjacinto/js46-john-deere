import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from './john-deere-logo.png';

export default function NavBar() {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    <img src={logo} width="180" className="d-inline-block align-top mr-3" alt="John Deere" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBarApp" aria-controls="navBarApp" aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navBarApp">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/autores">Autores</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categorias">Categorias</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/livros">Livros</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <hr className="mt-0" />
        </Fragment>
    );
}