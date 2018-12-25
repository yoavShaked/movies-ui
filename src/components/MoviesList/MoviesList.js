import React from 'react';
import './style.css';
import MovieItem from './../MovieItem/MovieItem';

const MoviesList = props => {

    const {movies, deleteMovie, withSave, saveMovie} = props;
    const moviesList = movies.map(({ id, poster_path, title, runtime, director, genre }) => {
        return <MovieItem
            key={id}
            poster={poster_path}
            id={id}
            title={title}
            runtime={runtime}
            director={director}
            genre={genre}
            deleteMovie={() => deleteMovie(id)}
            withSave={withSave}
            saveMovie={() => saveMovie({title, poster: poster_path, director, genre, runtime})}
            />
        });

        return (
            <div className='movies-list'>
                {moviesList}
            </div>
        );
}

export default MoviesList;