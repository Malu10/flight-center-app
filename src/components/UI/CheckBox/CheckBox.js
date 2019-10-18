import React from 'react';

import './CheckBox.css';

const checkBox = (props) => {
    return (
        <div className="checkbox">
            <label>
                <input type="checkbox" value=""/>
                <span className="checkbox-label">
                    {props.checkName}
                </span>
            </label>
        </div>
    )
}

export default checkBox;