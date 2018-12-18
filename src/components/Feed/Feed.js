import React from 'react';
import MoviesList from './../../containers/MoviesList/MoviesList';
import  SearchMovie from '../../containers/SearchMovie/SearchMovie';

const Feed = () => {
    return (
        <div>
            <SearchMovie/>
            <MoviesList />
        </div>
    );
};

export default Feed;