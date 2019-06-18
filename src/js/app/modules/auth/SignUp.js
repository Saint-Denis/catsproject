import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../actions/authActions";

class SignUp extends Component {
    state = {
        email: '',
        pasword: '',
        firstName: '',
        lastName: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
       e.preventDefault();
       this.props.signUp(this.state);
    }
    render () {
        const { auth, authError } = this.props
        if(auth.uid) return <Redirect to="/" />
        return (
            <Fragment>
                <h1>Sign Up</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form__field">
                        <input
                            type="email"
                            name="email"
                            onChange={this.handleChange}
                            placeholder="Email"
                        />
                    </div>
                    <div className="form__field">
                        <input
                            type="password"
                            name="password"
                            onChange={this.handleChange}
                            placeholder="Password"
                        />
                    </div>
                    <div className="form__field">
                        <input
                            type="text"
                            name="firstName"
                            onChange={this.handleChange}
                            placeholder="First Name"
                        />
                    </div>
                    <div className="form__field">
                        <input
                            type="text"
                            name="lastName"
                            onChange={this.handleChange}
                            placeholder="Last Name"
                        />
                    </div>
                    <div className="form__field">
                        <button className="form__button" type="submit">
                            Sign Up
                        </button>
                    </div>
                    <div className="form__field">
                        <div className="error">
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>
                </form>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth,
      authError: state.auth.authError,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
