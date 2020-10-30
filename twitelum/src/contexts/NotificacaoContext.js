import React, { createContext, useState } from 'react';
import '../assets/css/notificacao.css';

export const NotificacaoContext = createContext();

export default function NotificacaoContextProvider(props) {
    const [msg, setMsg] = useState('');
    const dadosNotificacao = { msg, setMsg }

    const resetNotificacao = () => setMsg('');

    const renderMsg = () => {
        if (msg) {
            return (
                <div className="notificacaoMsg" onAnimationEnd={resetNotificacao}>
                    {msg}
                </div>
            );
        }
    }

    return (
        <NotificacaoContext.Provider value={dadosNotificacao}>
            {props.children}
            {renderMsg()}
        </NotificacaoContext.Provider>
    )
}