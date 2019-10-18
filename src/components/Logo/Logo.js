import React from 'react';

import adminLogo from '../../assets/images/adminLogo.png';
import './Logo.css';

const logo = (props) => (
    <div className="Logo" style={{height: props.height}}>
        <img src={adminLogo} alt="Logo" />
    </div>
);

export default logo;