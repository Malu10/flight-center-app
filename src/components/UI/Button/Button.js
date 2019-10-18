import React from 'react';

import './Button.css';

const button = (props) => {
    let icon = '';
    let btnClassName = 'btn'
    if(props.name === 'Search your flights'){
        icon = <span className="glyphicon glyphicon-search"></span>;
    }
    if(props.btnColor === 'red') {
        btnClassName = 'btn red-btn'
    }
    return (
        <button className={btnClassName}>
            {icon}
            {props.name}
        </button>
    )
}

export default button;