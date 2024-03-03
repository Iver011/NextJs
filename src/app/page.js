'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import PokeCard from "./components/pokemoncard";
import PokeBotones from "./components/pokemonboton";
import PokeBusqueda from "./components/pokemonbuscar";

export default function Home() {
  const [pokemonData, setPokemonData] = useState([]);
  const [filteredPokemon,setFilteredPokemon]=useState([]);
  const [selectedType, setSelectedType] = useState("ver todos");
  
  useEffect(() => {
    const fetchData = async () => {
      const pokemonList = [];
      for (let i = 1; i <= 200; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        pokemonList.push(data);
      }
      setPokemonData(pokemonList);
    };

    fetchData();
  }, []);

  if (pokemonData.length === 0) {
    return <div>Loading...</div>;
  }

 

  return (
    <body className={`${styles.main} ${styles[selectedType]}`}>
    <main>
      <header className={styles[selectedType]}>
      <div className={styles.menu}>
      <PokeBotones pokemonData={pokemonData} setFilteredPokemon={setFilteredPokemon} setSelectedType={setSelectedType}/>
      <PokeBusqueda setFilteredPokemon={setFilteredPokemon}></PokeBusqueda>
      </div>
      </header>{selectedType=="ver todos"?(
        <h3 id={styles["titulo"]}>Pokemon</h3>
      ):
      (
        <h3 id={styles["titulo"]}>Pokemon {selectedType}</h3>
      )}
      
      <div className={`${styles.todos} `}>
      {filteredPokemon.length > 0 ? (
        filteredPokemon.map(pokemon => (
          <PokeCard key={pokemon.id} id={pokemon.id} name={pokemon.name} image={pokemon.sprites.front_default} types={pokemon.types}  />
        ))
      ) : (
        
        pokemonData.map(pokemon => (
          
          <PokeCard key={pokemon.id} id={pokemon.id} name={pokemon.name} image={pokemon.sprites.front_default} types={pokemon.types}  />
          
        ))
      )}</div>
    </main>
    </body>
  );
}
