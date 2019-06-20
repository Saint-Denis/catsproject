import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";
import Breeds from "../breeds/Breeds"
import Cat from "../cat/Cat"
import CatsService from "../../services/CatsService";

class Cats extends Component {
  cats = new CatsService();

  state = {
    catImage: null,
    randomCat: null,
    allCats: null,
    breedsList: null,
    isLoading: true,
    selectedBreedId: null,
  };

  componentDidMount() {
    const randomCatPromise = this.fetchRandomCat();
    const breedsPromise = this.fetchBreeds();

    Promise.all([randomCatPromise, breedsPromise]).then(list => {
      const allCatsList = [...list[0], ...list[1]]
      this.setState({
          randomCat: allCatsList[0],
          catImage: allCatsList[0].url,
          breedsList: list[1],
          allCats: allCatsList,
          isLoading: false,
        });
    });
  }

  fetchRandomCat = () => {
    return this.cats.getRandomCat();
  };

  fetchBreeds = () => {
    return this.cats.getAllBreeds();
  };

  handleSpecificBreed = id => {
    this.setState({
      isLoading: true,
    });

    this.cats.getSpecificBreed(id).then(specificBreed => {
        this.setState({
          catImage: specificBreed[0].url,
          selectedBreedId: specificBreed[0].breeds[0].id,
          isLoading: false,
        });
    });
  };


  render() {
    const { isLoading, catImage, breedsList, randomCat, selectedBreedId } = this.state;
    if(!this.props.auth.uid) return <Redirect to="/signin" />
    return (
      <Fragment>
        <h1>Random Cat</h1>
        { isLoading ? (
          <Loader type="ThreeDots" color="#4c68d7" height="200" width="100" />
        ) : (
          <Cat
            isLoading={isLoading }
            catImage={catImage}
            randomCatId={randomCat.id}
            selectedBreedId={selectedBreedId}
        />
        )}
        <Breeds
          breedsList={breedsList}
          handleSpecificBreed={this.handleSpecificBreed}
          />
      </Fragment>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps, null)(Cats)
