import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import Cat from "../cat/Cat"
import fetchFavorites from "../../actions/fetchFavorites";

function Favorites ({favorites, fetchFavorites, userId}) {
  const isReadyToShowFavorites = favorites && favorites[userId] && favorites[userId].favorites.length > 0;
  if (!isReadyToShowFavorites) return null;
  fetchFavorites(userId);

  return (
    <Fragment>
      <h1>Favorites Page</h1>
      <div className="favourites">
       {
         favorites[userId].favorites.map(item => {
            return (
              <Cat
                key={item.id}
                favoriteId={item.id}
                catImage={item.catImage}
              />
            )
          })
        }
      </div>
    </Fragment>
  )
}



const mapStateToProps = (state) => {
  return {
    favorites: state.firestore.data.favorites,
    auth: state.firebase.auth,
    userId: state.firebase.auth.uid,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchFavorites: (id) => dispatch(fetchFavorites(id))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => [`favorites/${props.userId}`])
)(Favorites)
