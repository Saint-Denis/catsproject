import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import Cat from "../cat/Cat"
import fetchFavorites from "../../actions/fetchFavorites";

class Favorites extends Component {
  // componentDidMount(){
  //   this.props.fetchFavorites();
  // }
  // if(!this.props.auth.uid) return <Redirect to="/signin" />
  render() {
    const { favorites } = this.props
    console.log('favorites', favorites)
    if(!favorites) return null
    return (
      <Fragment>
         <h1>Favorites Page</h1>
         <div className="favourites">
             {favorites && favorites.map(favoritesItem => {
               return (
                 <Cat
                   key={favoritesItem.id}
                   catImage={favoritesItem.catImage}
                 />
               )
             })}
         </div>
       </Fragment>
     )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFavorites: () => dispatch(fetchFavorites())
  }
}

const mapStateToProps = (state) => {
  const userId = state.firebase.auth.uid
  return {
    favorites: state.firestore.data.favorites[userId],
    auth: state.firebase.auth,
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
      {collection: 'favorites'}
  ])
)(Favorites)
