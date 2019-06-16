import React from "react"
import Swiper from "react-id-swiper/lib/ReactIdSwiper.full";
import swiperConfig from "./config";

function Breeds ({breedsList, handleSpecificBreed}) {
    return (
        <div className="breeds">
            <p className="breeds__text">Choose a breed</p>
            <div className="breeds__container">
                <div className="breeds__list">
                <Swiper {...swiperConfig}>
                    {breedsList &&
                    breedsList.map(breed => {
                        return (
                        <div
                            key={breed.id}
                            className="breeds__item"
                            onClick={() => handleSpecificBreed(breed.id)}
                        >
                            {breed.name}
                        </div>
                        );
                    })}
                </Swiper>
                </div>
            </div>
       </div>
    )
}

export default Breeds;