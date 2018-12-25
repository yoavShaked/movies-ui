import React from 'react';
import  SearchMovie from '../../containers/SearchMovie/SearchMovie';
import MoviesApi from '../../containers/apiMovies';

const Feed = () => {
    return (
        <div>
            <SearchMovie/>
            <MoviesApi />
        </div>
    );
};

export default Feed;