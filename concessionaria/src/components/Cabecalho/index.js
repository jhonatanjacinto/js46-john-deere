import React from 'react';

export default function Cabecalho(props)
{
    return (
        <div className="jumbotron mb-3">
            <h1>{ props.titulo }</h1>
        </div>
    );
}