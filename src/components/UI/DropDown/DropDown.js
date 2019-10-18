import React from 'react';

import './DropDown.css';

const dropDown = (props) => {
    const options =  props.option.map((data) => 
        <option 
            key={data.id}
            value={data.value}
        >
            {data.value}
        </option>
    );

    return (
        <div className="dropDown">
            <label className="form-label">
                {props.selectName}
            </label>
            <select className="form-control">
                {options}
            </select>
        </div>
    )
}

export default dropDown;