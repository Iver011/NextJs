import { useState } from "react";
import style from "./pokemonbuscar.module.css"

function PokeBusqueda({setFilteredPokemon}){

    const [pokemonId,setPokemonId]=useState('')

    const buscarPokemon=()=>{ /* Actualiza el estado de Filtered Pokemon que es util en PokeCard */
        const endpoint = isNaN(pokemonId) ? `https://pokeapi.co/api/v2/pokemon/${pokemonId.toLowerCase()}` : `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

        fetch(endpoint).
        then((res) => 
            res.json()
          ).
        then(data=>{
            setFilteredPokemon([data])
        })
        setPokemonId("")
        
    }


    return(

        <div className={style.input}>

            <input id={style["buscar"]} placeholder="Ingresa un ID o nombre"
             value={pokemonId} onChange={(e)=>setPokemonId(e.target.value)}></input>
            <button className={style["busqueda"]} onClick={buscarPokemon}>
            <i className="material-icons">search</i>
            </button>
        </div>



    );
}export default PokeBusqueda;