import React, { createContext, useState } from 'react';

export const ConcessionariaContext = createContext();

export function ConcessionariaContextProvider(props)
{
    const [carros, setCarros] = useState([]);
    const dadosContexto = { carros, setCarros };

    return (
        <ConcessionariaContext.Provider value={ dadosContexto }>
            { props.children }
        </ConcessionariaContext.Provider>
    );
}
