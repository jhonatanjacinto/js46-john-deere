import React, { Fragment } from 'react';
import Cabecalho from '../Cabecalho/index.js';
import Container from '../Container/index.js';
import NavBar from '../NavBar/index.js';
import Rodape from '../Rodape/index.js';

export default function MasterPage(props)
{
    return (
        <Fragment>
            <NavBar />
            <Container>
                <Cabecalho titulo={props.titulo} />
                { props.children }
                <Rodape />
            </Container>
        </Fragment>
    );
}