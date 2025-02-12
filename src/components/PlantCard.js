import React, { useState } from "react";

function PlantCard({name, image, price}) {

  const [soldOut, setSoldOut] = useState(true)

  function handleClick(event) {
    setSoldOut(prev => !prev)
    console.log(handleClick)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {soldOut ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
