import React, { Fragment } from 'react';

export default function Cabecalho(props)
{
    return (
        <Fragment>
            <h2 className="display-4">{ props.titulo }</h2>
            <hr />
        </Fragment>
    );
}