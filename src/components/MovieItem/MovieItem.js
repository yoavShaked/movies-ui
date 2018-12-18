import React from 'react';
import './style.css';
import deleteLogo from '../../images/delete.png';
import saveLogo from '../../images/save.jpg';

const MovieItem = ({ title, poster, genre, director, runtime, deleteMovie, saveMovie }) => {

    return (
        <div className='card'>
            <img
                className='image'
                src={poster}
                alt={title} />
            <div className='container'>
                <div className='title'>{title}</div>
                <div className='title'>{`genre: ${genre}`}</div>
                <div className='title'>{`direcotr: ${director}`}</div>
                <div className='title'>{runtime}</div>
                <div className='footer'>            
                    <img className='delete-icon' src={deleteLogo} alt='deleteLogo' onClick={deleteMovie} />
                    <img className='save-icon' src={saveLogo} alt='saveLogo' onClick={saveMovie}/>
                </div>
            </div>
        </div>
    );
};

export default MovieItem;