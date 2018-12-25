import axios from 'axios';
import {FETCH_USER_MOVIES, DELETE_USER_MOVIE, SAVE_USER_MOVIE} from '../Types';

const url = 'http://localhost:1234/api/movies';
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzE4YzZkMTllZmZhNDE5MzQyZjUxNzIiLCJpYXQiOjE1NDUxMjc2MzR9.eQXfDxneUmfDkiQtXaGkQTkZ-c0f_o9oAqGwJGD3m7U";
export const fetchUserMovies = () => async dispatch => {

    try{
        const response = await axios.get(`${url}/movies`, {headers:{"x-auth":token}});
        console.log(response);
    }
    catch(ex){
        console.log('error: ',ex);
    }
}

export const saveUserMovie = movie => async dispatch => {
    try{
        console.log('movie : ', movie);
        const response = await axios.post(`${url}`,movie, {headers: {'x-auth':token}});
        console.log(response);
    }
    catch(error){
        console.log('error: ', error);
    }
}