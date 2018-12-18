import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies, deleteMovie } from '../../store/actions/MoviesAPI';
import MovieItem from './../../components/MovieItem/MovieItem';
import './style.css';

class MoviesList extends Component {

    state = {
        counter:0
    }

    componentDidMount() {
        this.props.fetchMovies('upcoming');
        window.addEventListener('scroll', this.scrollHandler, false);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.scrollHandler, false);
    }

    determineMoviesCategoryToFetch(){
        const {fetchMovies} = this.props;
        let {counter} = this.state;

        switch(counter){
            case 0:{
                fetchMovies('latest');
                break;
            }
            case 1:{
                fetchMovies('now_playing');
                break;
            }
            case 2:{
                fetchMovies('popular');
                break;
            }
            case 3:{
                fetchMovies('top_rated');
                break;
            }
        }

        if(counter <= 3){
            counter++;
            this.setState({counter});
        }
    }

    scrollHandler = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            this.determineMoviesCategoryToFetch();
          }
    }

    render() {
        const {movies, deleteMovie} = this.props;
        const moviesList = movies.map(({ id, poster_path, title, runtime, director, genre }, index) => {
            return <MovieItem
                key={index}
                poster={poster_path}
                id={id}
                title={title}
                runtime={runtime}
                director={director}
                genre={genre}
                deleteMovie={() => deleteMovie(id)}
                 />
        });

        return (
            <div className='movies-list'>
                {moviesList}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchMovies,
        deleteMovie
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);