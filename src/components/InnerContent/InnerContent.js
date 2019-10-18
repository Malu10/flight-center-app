import React from 'react';

import './InnerContent.css';

import SearchFlight from '../SearchFlight/SearchFlight';
import SalesInfo from '../SalesInfo/SalesInfo';

const innerContent = (props) => {

    let welcomeMessage = '';
    if(props.innerPage === 'Point of Sale Management') {
        welcomeMessage = <SalesInfo />
    } else if(props.innerPage === 'Search') {
        welcomeMessage = <SearchFlight/>
    } else {
        welcomeMessage = <h2>Welcome to TPConnects</h2>
    }

    return (
        <div className="innerPage">
            {welcomeMessage}
        </div>
    )
}

export default innerContent;