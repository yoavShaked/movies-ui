import React from 'react';
import './style.css';

const Button = ({btnText, type}) => {
    
    return (
        <div >
        <button type={type} className="btn-text">{btnText}</button>
    </div>
    );
};

export default Button;