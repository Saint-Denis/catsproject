import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signIn } from "../../actions/authActions";
import fetchFavorites from "../../actions/fetchFavorites";

class SignIn extends Component {
    state = {
        email: '',
        password: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
       e.preventDefault();
        this.props.signIn(this.state);
        this.props.fetchFavorites(this.props.auth.uid);
    }
    render () {
        const { authError, auth } = this.props
        if(auth.uid) return <Redirect to="/" />
        return (
            <Fragment>
                <h1>Sign In</h1>
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
                        <button className="form__button" type="submit">
                            Login
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
      authError: state.auth.authError,
      auth: state.firebase.auth,
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (cred) => dispatch(signIn(cred)),
        fetchFavorites: (id) => dispatch(fetchFavorites(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
