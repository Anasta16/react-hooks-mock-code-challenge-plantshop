import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantList, search}) {

  const filteredList = plantList.filter(plant => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <ul className="cards">{
      filteredList.map(plant => {
        return <PlantCard
        key={plant.id}
        name={plant.name}
        image={plant.image}
        price={plant.price}
        />
      })
    }</ul>
  );
}

export default PlantList;
