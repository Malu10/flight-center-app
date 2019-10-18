import React from 'react';

import './TextField.css';

const textField = (props) => {
    return (
        <div className="textField">
            <label className="form-label">
                {props.inputLabel}
            </label>
            <input
                type = "text"
                placeholder = {props.placeholder}
            />
        </div>
    )
}

export default textField;