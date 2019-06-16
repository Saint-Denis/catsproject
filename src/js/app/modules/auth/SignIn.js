import React, { Component, Fragment } from 'react';

class SignIn extends Component {
    state = {
        email: '',
        pasword: '',
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
                <h1>Sign In</h1>
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
                        <button className="form__button" type="submit">
                            Login
                        </button>
                    </div>
                </form>
            </Fragment>
        )
    }
}

export default SignIn;
