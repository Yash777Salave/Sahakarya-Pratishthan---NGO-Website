import React from 'react';

const Slide = ({ title, description }) => {
    return (
        <div className="slide">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Slide