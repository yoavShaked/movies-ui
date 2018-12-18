import {FETCH_MOVIES, ADD_MOVIE, DELETE_MOVIE} from '../Types';

export default function(state = [], action){
    switch(action.type){
        case FETCH_MOVIES:
            return [...state,...action.movies];
        case ADD_MOVIE:{
            return [action.movie,...state];
        }
        case DELETE_MOVIE:{
            return state.filter(movie => movie.id !== action.movieId);
        }
        default:
            return state;
    }
}