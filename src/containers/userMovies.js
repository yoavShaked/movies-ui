import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MoviesList from './../components/MoviesList/MoviesList';
import {fetchUserMovies} from '../store/actions/userMovies';
import { fetchUserMovies } from './../store/actions/userMovies';

class MoviesUser extends Component {

    componentDidMount(){
        this.props.fetchUserMovies();
    }

    render() {
        return (
               <div></div>         
        );
    }
}

function mapStateToProps(state){
    return {
        movies:state.movies.userMovies
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fetchUserMovies
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesUser);