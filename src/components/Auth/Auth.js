import React, { Component } from 'react';
import './style.css';
import Button from './../Button/Button';

export default class Auth extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            name: "",
            error: {
                isValid: true,
                message:{
                    email:'',
                    name:'',
                    password:''
                }
            }
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.validation();
        if(this.state.error.isValid){
            //move to feed
        }
    }

    validation() {
        const { email, password, name, error } = this.state;
        const rexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email === '' || !rexEmail.test(email)) {
            error.isValid = false;
            error.message = 'Please insert a correct email\n';
        }
        if (password.length < 7 || password.length > 20) {
            error.isValid = false;
            error.message += 'Password should contain 7-20 cheracters\n';
        }
        if (this.props.signup && name === '') {
            error.isValid = false;
            error.message += 'Please insert name';
        }
        this.setState({error});
    }

    render() {
        const { email, password, name, error } = this.state;
        const { title, signup, btnText } = this.props;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <h1>{title}</h1>
                    <div className="input-rows">
                        <div className="input-row">
                            <label>Email</label>
                            <input onChange={this.handleChange} type="email" name="email" value={email} />
                        </div>
                        <div className="input-row">
                            <label>Password</label>
                            <input onChange={this.handleChange} type="password" name="password" value={password} />
                        </div>
                        {signup && (<div className="input-row">
                            <label>Name</label>
                            <input onChange={this.handleChange} type="text" name="name" value={name} />
                        </div>)}
                    </div>
                    <Button btnText={btnText} type="submit" />
                    <div>
                        {!error.isValid && <p>{error.message}</p>}
                    </div>
                </form>
            </div>
        );
    }
}