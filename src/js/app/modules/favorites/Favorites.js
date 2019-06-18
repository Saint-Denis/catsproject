import React, { Fragment } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import Cat from "../cat/Cat"

function Favorites({favorites, auth}) {
  if(!auth.uid) return <Redirect to="/signin" />
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

const mapStateToProps = (state) => {
  return {
    favorites: state.firestore.ordered.favorites || "undefined",
    auth: state.firebase.auth,
  }
}

export default compose(
  connect(mapStateToProps, null),
  // firestoreConnect([
  //     {collection: 'favorites'}
  // ])
)(Favorites)
