import React, { Component } from 'react';
import './style.css';
import searchLogo from '../../images/finder_icon.png';

export default class Search extends Component {

    state = {
        search: ''
    };

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    clickHandler = () => {
        const { search } = this.state;
        if (search !== '') {
            this.props.searchHandler(search);
        }
    }

    render() {
        return (
            <div className='search-container'>
                <img className='search-logo' onClick={this.clickHandler} src={searchLogo} alt='searchLogo' />
                <input className='input-field' name='search' type='text' onChange={this.changeHandler} />
            </div>
        );
    }
}