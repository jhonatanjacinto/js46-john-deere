import React from 'react';
import Container from '../Container';
import Cabecalho from '../Cabecalho';
import Menu from '../Menu';
import Rodape from '../Rodape'

export default function MasterPage(props)
{
    return (
        <Container>
            <Cabecalho titulo={ "Minha Concessionária | " + props.titulo } />
            <Menu />
            { props.children }
            <Rodape />
        </Container>
    );
}