import React from 'react';

export default function Container(props)
{
    return (
        <div className="container my-3">
            { props.children }
        </div>
    );
}