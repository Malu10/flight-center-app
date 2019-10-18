import React from 'react';

import './SearchBar.css';

const searchBar = (props) => (
    <div className="searchBar">
        <input
            type = "text"
            name = "search"
            placeholder = "TRIP ID / AGENT REFERENCE"
        />
    </div>
);

export default searchBar;