import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchMovie} from '../../store/actions/MoviesAPI';
import Search from '../../components/Search/Search';

class SearchMovie extends Component {
    render() {
        return (
            <Search searchHandler={(movieName) => this.props.fetchMovie(movieName)} />
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fetchMovie
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchMovie);