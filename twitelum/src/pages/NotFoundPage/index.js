import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage(props)
{
    return(
        <div className="container">
            A URL <strong>{ props.location.pathname }</strong> não existe no Twitelum, se 
            quiser voltar para a página inicial basta <Link to="/">clicar aqui</Link>.
        </div>
    );
}