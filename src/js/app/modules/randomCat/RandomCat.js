import React, { Component } from "react";
import Loader from "react-loader-spinner";
import CatsService from "../../services/CatsService";

class RandomCat extends Component {
  state = {
    randomCatImage: null,
    isLoading: true
  };

  componentDidMount() {
    this.setRandomCat().then(res => {
      this.setState({
        randomCatImage: res[0].url,
        isLoading: false
      });
    });
  }

  setRandomCat = () => {
    const cat = new CatsService();
    return cat.getRandomCat();
  };
  render() {
    const { isLoading, randomCatImage } = this.state;
    return (
      <section className="random-cat">
        <h1>Random Cat</h1>
        <p clasName="random-cat">Select your random cat</p>
        {isLoading ? (
          <Loader type="ThreeDots" color="#4c68d7" height="200" width="100" />
        ) : (
          <figure className="random-cat__pic">
            <img src={randomCatImage} />
          </figure>
        )}
      </section>
    );
  }
}

export default RandomCat;
