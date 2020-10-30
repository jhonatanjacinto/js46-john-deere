import React from 'react';
import PropTypes from 'prop-types';
import Widget from '../Widget';
import './modal.css';

export function Modal({ children, isAberto, fechandoCallback }) 
{
    function clickHandler(e) {
        if (e.target.classList.contains('modal')) {
            fechandoCallback();
        }
    }

    return (
        <div onClick={clickHandler} className={`modal ${isAberto ? 'modalActive' : ''}`}>
            <div>
                <Widget>
                    { isAberto && children() }
                </Widget>
            </div>
        </div>
    )
}

Modal.propTypes = {
    isAberto: PropTypes.bool.isRequired,
    fechandoCallback: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired
}