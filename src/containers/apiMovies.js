import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies, deleteMovie } from '../store/actions/MoviesAPI';
import {saveUserMovie} from '../store/actions/userMovies';
import MoviesList from '../components/MoviesList/MoviesList';

class MoviesApi extends Component {

    state = {
        counter: 0
    }

    componentDidMount() {
        this.props.fetchMovies('upcoming');
        window.addEventListener('scroll', this.scrollHandler, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler, false);
    }

    determineMoviesCategoryToFetch() {
        const { fetchMovies } = this.props;
        let { counter } = this.state;

        switch (counter) {
            case 0: {
                fetchMovies('latest');
                break;
            }
            case 1: {
                fetchMovies('now_playing');
                break;
            }
            case 2: {
                fetchMovies('popular');
                break;
            }
            case 3: {
                fetchMovies('top_rated');
                break;
            }
        }

        if (counter <= 3) {
            counter++;
            this.setState({ counter });
        }
    }

    scrollHandler = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            this.determineMoviesCategoryToFetch();
        }
    }

    render() {
        const { movies, deleteMovie, saveUserMovie } = this.props;
        return (
            <MoviesList
                movies={movies}
                deleteMovie={deleteMovie}
                withSave={true}
                saveMovie={saveUserMovie} />
        );
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies.moviesApi
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchMovies,
        deleteMovie,
        saveUserMovie
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesApi);
