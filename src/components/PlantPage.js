import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantList, setPlantList] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(`http://localhost:6001/plants`)
      .then(response => response.json())
      .then(data => setPlantList(data))
  }, [])

  return (
    <main>
      <NewPlantForm
      setPlantList={setPlantList}
      />
      <Search 
      search={search}
      setSearch={setSearch}
      />
      <PlantList 
      plantList={plantList}
      setPlantList={setPlantList}
      search={search}
      />
    </main>
  );
}

export default PlantPage;
