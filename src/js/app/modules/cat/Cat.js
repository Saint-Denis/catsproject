import React, { Component } from "react";
import { connect } from "react-redux";
import addToFavorite from "../../actions/addToFavorite";
import removeFromFavorite from "../../actions/removeFromFavorite";


class Cat extends Component {

    getCatsId = () => {
        const { randomCatId, selectedBreedId, favoriteId } = this.props
        return selectedBreedId === null ? randomCatId : selectedBreedId || favoriteId
    }

    handleToggleFavorite = () => {
        const {
            addToFavorite,
            removeFromFavorite,
            catImage,
            favorites,
            userId,
        } = this.props

        const isFavorite = favorites.find(el => el.id === this.getCatsId())

        console.log('isFavorite', isFavorite)
        console.log('favorites', favorites)

        if (!isFavorite) {
            addToFavorite(catImage, this.getCatsId());
        } else {
            removeFromFavorite(this.getCatsId());
        }
    }

    render () {
        const { catImage  } = this.props

        return (
            <section className="cat">
                <figure className="cat__pic">
                    <div className="cat__buttons">
                    <button
                        // className={this.state.isFavorite ?
                        // "cat__favourite active":
                        // "cat__favourite"
                        // }
                        onClick={this.handleToggleFavorite}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"/></svg>
                    </button>
                    </div>
                    <img src={catImage} />
                </figure>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      favorites: state.user.favorites,
      userId: state.firebase.auth.uid,
    }
  }


const mapDispatchToProps = (dispatch) => {
    return {
      addToFavorite: (catImage, id) => dispatch(addToFavorite(catImage, id )),
      removeFromFavorite: (id ) => dispatch(removeFromFavorite(id)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cat);
