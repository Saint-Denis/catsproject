import React from "react"

function Breeds({ breedsList, handleSpecificBreed, selectedBreedId }) {
    if (!breedsList) return null

    return (
        <div className="breeds">
            <p className="breeds__text">All Breeds</p>
            <div className="breeds__container">
                <div className="breeds__list">
                    {breedsList.map(breed => {
                        return (
                        <button
                            key={breed.id}
                                className={
                                    selectedBreedId === breed.id ?
                                        "breeds__item active" : "breeds__item"}
                            onClick={() => handleSpecificBreed(breed.id)}
                        >
                            {breed.name}
                        </button>
                        );
                    })}
                </div>
            </div>
       </div>
    )
}

export default Breeds;
