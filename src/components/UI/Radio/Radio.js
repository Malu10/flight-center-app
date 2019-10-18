import React from 'react';

import './Radio.css';

const radio = (props) => {
    return (
        <label className="radio-inline radio">
            <input
                type = "radio"
                value = {props.value}
                name = "inlineRadioOptions"
            />
            <span className="checkmark"></span>
            <span className="radioValue">{props.value}</span>
        </label>
    )
}

export default radio;