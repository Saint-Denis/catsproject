import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import Loader from "react-loader-spinner";
import Cat from "../cat/Cat"

function Favorites ({favorites, userId, requested }) {

  if (requested) {
    const userFavoritesArray = favorites[userId].favorites;
    let content;

    console.log('userFavoritesArray', userFavoritesArray)
    console.log('favorites[userId].favorites', favorites[userId].favorites)
    console.log('favorites[userId]', favorites[userId])

  }
    // if (!favorites) {
    //   content = <Loader />
    // } else if (!favorites[userId] && requested[`favorites/${userId}`]) {
    //     content = <p>You have not favorites</p>
    //   } else {
    //     content = userFavoritesArray.map(item => {
    //       return (
    //         <Cat
    //           key={item.id}
    //           catImage={item.catImage}
    //         />
    //       )
    //   })
    // }

  // return (
  //   <Fragment>
  //     <h1>Favorites Page</h1>
  //     <div className="favourites">{this.getContent()}</div>
  //   </Fragment>
  // )
  return null
}



const mapStateToProps = (state) => {
  return {
    favorites: state.firestore.data.favorites,
    auth: state.firebase.auth,
    userId: state.firebase.auth.uid,
    requesting: state.firestore.status.requesting,
    requested:  state.firestore.requested,
  }
}

export default compose(
  connect(mapStateToProps, null),
  firestoreConnect(props => [`favorites/${props.userId}`])
)(Favorites)
