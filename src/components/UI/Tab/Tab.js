import React from 'react';

import './Tab.css';

const tab = (props) => {

    const optionValue = props.tabOptions.map((option, index) => {
        return (
            <li 
                key = {option.id}
                className = {option.name === 'POS Office' ? 'active' : null}>
                <a href={"/"+option.name} onClick={props.handleTabClick}>
                    {option.name}
                </a>
            </li>
        )
    })

    return (
        <ul className="nav nav-tabs">
            {optionValue}
        </ul>
    )
}

export default tab;