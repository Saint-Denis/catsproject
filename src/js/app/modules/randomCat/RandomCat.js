import React, { Component } from "react";
import Loader from "react-loader-spinner";
import Swiper from "react-id-swiper/lib/ReactIdSwiper.full";
import swiperConfig from "./config";
import CatsService from "../../services/CatsService";

class RandomCat extends Component {
  cats = new CatsService();

  state = {
    catImage: null,
    breedsList: null,
    isLoading: true
  };

  componentDidMount() {
    this.fetchBreeds().then(res => {
      this.setState({
        breedsList: res
      });
    });
    this.fetchRandomCat().then(res => {
      this.setState({
        catImage: res[0].url,
        isLoading: false
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
      isLoading: true
    });

    this.cats.getSpecificBreed(id).then(specificBreed => {
      this.setState({
        catImage: specificBreed[0].url,
        isLoading: false
      });
    });
  };

  render() {
    const { isLoading, catImage, breedsList } = this.state;

    return (
      <section className="random-cat">
        <h1>Random Cat</h1>
        {isLoading ? (
          <Loader type="ThreeDots" color="#4c68d7" height="200" width="100" />
        ) : (
          <figure className="random-cat__pic">
            <img src={catImage} />
          </figure>
        )}
        <p className="random-cat">Select your random cat</p>
        <div className="random-cat__breeds">
          <div className="random-cat__breeds-list">
            <Swiper {...swiperConfig}>
              {breedsList &&
                breedsList.map(breed => {
                  return (
                    <div
                      key={breed.id}
                      className="random-cat__breeds-item"
                      onClick={() => this.handleSpecificBreed(breed.id)}
                    >
                      {breed.name}
                    </div>
                  );
                })}
            </Swiper>
          </div>
        </div>
      </section>
    );
  }
}

export default RandomCat;
