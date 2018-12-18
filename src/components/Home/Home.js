import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Home = () => {
    return (
        <div className="home">
            <div className="content">
                <h1>Movie store</h1>
                <h3>Sign up today</h3>
            </div>
            <div className="button-box">
                <Link className="btn-text" to="/signup">SIGN UP</Link>
            </div>
        </div>
    );
};

export default Home;