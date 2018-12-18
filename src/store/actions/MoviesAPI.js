import { FETCH_MOVIES, ADD_MOVIE, DELETE_MOVIE } from '../Types';
import axios from 'axios';
const env = require('dotenv');
env.config();

const api_key = '9aa4e67c433032bff2e3b96e7beaa888';
const prefix_url = 'https://api.themoviedb.org/3';

async function getDetails(id){
    return await axios.get(`${prefix_url}/movie/${id}?api_key=${api_key}&language=en-US`);
}

async function getDirector(id){
    return await axios.get(`${prefix_url}/movie/${id}/credits?api_key=${api_key}`);
}

export const fetchMovies = category => async dispatch => {
        try {
            const response = await axios.get(`${prefix_url}/movie/${category}?api_key=${api_key}&language=en-US&page=1`);
            const { results } = response.data;
            const moviesPromises = results.map(async ({ id, title, poster_path }) => {
                const detailsPromise = await getDetails(id);
                const directorPromise = await getDirector(id);
                return {
                    genre:detailsPromise.data.genres[0].name,
                    runtime: `${detailsPromise.data.runtime} ms`,
                    director: directorPromise.data.crew[0].name,
                    id,
                    title,
                    poster_path: `http://image.tmdb.org/t/p/w185${poster_path}`
                };
            });
            
            const movies = await Promise.all(moviesPromises);
            dispatch({ type: FETCH_MOVIES, movies, category });
        }
        catch (e) {
            // dispatch(faildToLoad(category, 'faild to load movies'));
            console.log('error ', e);
        }
}

export const fetchMovie = movieName => async dispatch => {
    try{
        const response = await axios.get(`${prefix_url}/search/movie?api_key=${api_key}&query=${movieName}`);
        let movieResult = response.data.results[0];
        const detailsPromise = await getDetails(movieResult.id);
        const directorPromise = await getDirector(movieResult.id);
        const movie = {
            id: movieResult.id,
            genre:detailsPromise.data.genres[0].name,
            runtime: `${detailsPromise.data.runtime} ms`,
            director: directorPromise.data.crew[0].name,
            title: movieResult.title,
            poster_path: `http://image.tmdb.org/t/p/w185${movieResult.poster_path}`
        }

        dispatch({movie, type: ADD_MOVIE});
    }
    catch(ex){
        console.log('error : ', ex);
    }
}

export const deleteMovie = (movieId) => {
    console.log(movieId);
    return{
        type:DELETE_MOVIE,
        movieId
    };
}