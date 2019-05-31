import React from 'react';
import './Rootaux.css';
const Rootaux = (props) => {
        return (
            <div className="head-color-site" style={{height: '320px'}}>
                {props.children}
            </div>
        );
};

export default Rootaux;