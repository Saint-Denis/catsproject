import React, { Component, Fragment } from 'react';

class SignUp extends Component {
    state = {
        email: '',
        pasword: '',
        firstName: '',
        lastName: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
       e.preventDefault();
    }
    render () {
        return (
            <Fragment>
                <h1>Sign Out</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form__field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="form__field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="form__field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="form__field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange}/>
                    </div>
                    <div className="form__field">
                        <button className="form__button" type="submit">
                            Sign Up
                        </button>
                    </div>
                </form>
            </Fragment>
        )
    }
}

export default SignUp;
