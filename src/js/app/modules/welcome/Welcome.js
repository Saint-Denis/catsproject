import React, { Component } from "react";
import { connect } from "react-redux";
import fetchFavorites from "../../actions/fetchFavorites"

class Welcome extends Component {
  componentDidMount () {
    this.props.fetchFavorites();
  }

  render () {
    return <h1>The Cats</h1>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFavorites: () => dispatch(fetchFavorites()),
  }
}


export default connect(null, mapDispatchToProps)(Welcome);
