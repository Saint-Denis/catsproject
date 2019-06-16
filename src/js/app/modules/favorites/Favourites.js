import React, { Fragment } from "react";
import { connect } from "react-redux";
import Cat from "../cat/Cat"

function Favorites({favouriteCats}) {

  return (
   <Fragment>
      <h1>Favorites Page</h1>
      <div className="favourites">
          {favouriteCats && favouriteCats.map(favouriteItem => {
            console.log('favouriteCats', favouriteCats)
            console.log('favouriteItem', favouriteItem)
            return (
              <Cat
                key={favouriteItem.breedId}
                isFavourite={favouriteItem.isFavourite}
                catImage={favouriteItem.catImage}
              />
            )
          })}
      </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    favouriteCats: state.favourite,
  }
}

export default connect(mapStateToProps, null)(Favorites);
