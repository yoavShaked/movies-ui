import {
    FETCH_MOVIES,
    ADD_MOVIE,
    DELETE_MOVIE,
    FETCH_USER_MOVIES,
    DELETE_USER_MOVIE,
    SAVE_USER_MOVIE
} from '../Types';

const initialState = {
    moviesApi: [],
    userMovies: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_MOVIES: {
            return Object.assign({}, {
                moviesApi: [...state.moviesApi, ...action.movies],
                userMovies: [...state.userMovies]
            });
        }
        case FETCH_USER_MOVIES: {
            return Object.assign({}, {
                moviesApi: [...state.moviesApi],
                userMovies: [...state.userMovies, action.movies]
            });
        }
        case SAVE_USER_MOVIE: {
            return Object.assign({}, {
                moviesApi: [...state.moviesApi],
                userMovies: [...state.userMovies, action.movie]
            });
        }
        case ADD_MOVIE: {
                        return Object.assign({}, {
                moviesApi: [...state.moviesApi, ...action.movie],
                userMovies: [...state.userMovies]
            });
        }
        case DELETE_USER_MOVIE:{
            return Object.assign({}, {
                moviesApi: [...state.moviesApi],
                userMovies:[...action.movies]
            });
        }
        case DELETE_MOVIE: {
            return Object.assign({}, {
                moviesApi: state.moviesApi.filter(movie => movie.id !== action.movieId),
                userMovies: [...state.userMovies]
            });
        }
        default:
            return state;
    }
}