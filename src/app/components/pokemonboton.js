import { useState } from "react";
import style from "./pokemonboton.module.css"

function PokeBotones({pokemonData,setFilteredPokemon,setSelectedType}){
   

    const filterPokemonByType = (type) => {
      const filteredPokemon = pokemonData.filter(
        (pokemon) => pokemon.types.some((t) => t.type.name === type)
      );
      setFilteredPokemon(filteredPokemon);
      setSelectedType(type); // Guardar el tipo seleccionado en el estado
    };
    return(

       
            <nav className={style.nav}>
               
                <img className={style.img} src="./logo2.svg"></img>
               
                <ul className={style["nav-list"]}>
                <li className={style["nav-item"]}><button className={`${style.btn} ${style["btn-header"]}`}id="ver-todos" onClick={()=>filterPokemonByType("ver todos")}>Ver todos</button></li> 
                <li className={style["nav-item"]}><button className={`${style.btn} ${style["btn-header"]} ${style.normal}`} id="normal" onClick={()=>filterPokemonByType("normal")}>Normal</button></li>
                <li className={style["nav-item"]}><button className={`${style.btn} ${style["btn-header"]} ${style.fire}`} id="fire" onClick={()=>filterPokemonByType("fire")}>Fire</button></li>
                <li className={style["nav-item"]}><button className={`${style.btn} ${style["btn-header"]} ${style.water}`} id="water" onClick={()=>filterPokemonByType("water")}>Water</button></li>
                <li className={style["nav-item"]}><button className={`${style.btn} ${style["btn-header"]} ${style.grass}`} id="grass" onClick={()=>filterPokemonByType("grass")}>Grass</button></li>
                <li className={style["nav-item"]}><button className={`${style.btn} ${style["btn-header"]} ${style.electric}`} id="electric" onClick={()=>filterPokemonByType("electric")}>Electric</button></li>
                <li className={style["nav-item"]}><button className={`${style.btn} ${style["btn-header"]} ${style.ice}`} id="ice" onClick={()=>filterPokemonByType("ice")}>Ice</button></li>
                <li className={style["nav-item"]}><button className={`${style.btn} ${style["btn-header"]} ${style.fighting}`} id="fighting" onClick={()=>filterPokemonByType("fighting")}>Fighting</button></li>
                <li className={style["nav-item"]}><button className={`${style.btn} ${style["btn-header"]} ${style.poison}`} id="poison" onClick={()=>filterPokemonByType("poison")}>Poison</button></li>
                <li className={style["nav-item"]}><button className={`${style.btn} ${style["btn-header"]} ${style.ground}`}  id="ground" onClick={()=>filterPokemonByType("ground")}>Ground</button></li>
                <li className={style["nav-item"]}><button className={`${style.btn} ${style["btn-header"]} ${style.flying}`}  id="flying" onClick={()=>filterPokemonByType("flying")}>Flying</button></li>
                <li className={style["nav-item"]}><button className={`${style.btn} ${style["btn-header"]} ${style.psychic}`}  id="psychic" onClick={()=>filterPokemonByType("psychic")}>Psychic</button></li>
                <li className={style["nav-item"]}><button className={`${style.btn} ${style["btn-header"]} ${style.bug}`}  id="bug" onClick={()=>filterPokemonByType("bug")}>Bug</button></li>
                <li className={style["nav-item"]}><button className={`${style.btn} ${style["btn-header"]} ${style.rock}`}  id="rock" onClick={()=>filterPokemonByType("rock")}>Rock</button></li>
                <li className={style["nav-item"]}><button className={`${style.btn} ${style["btn-header"]} ${style.ghost}`}  id="ghost" onClick={()=>filterPokemonByType("ghost")}>Ghost</button></li>
                <li className={style["nav-item"]}><button className={`${style.btn} ${style["btn-header"]} ${style.dark}`}  id="dark" onClick={()=>filterPokemonByType("dark")}>Dark</button></li>
                <li className={style["nav-item"]}><button className={`${style.btn} ${style["btn-header"]} ${style.dragon}`}  id="dragon" onClick={()=>filterPokemonByType("dragon")}>Dragon</button></li>
                <li className={style["nav-item"]}><button className={`${style.btn} ${style["btn-header"]} ${style.steel}`}  id="steel" onClick={()=>filterPokemonByType("steel")}>Steel</button></li>
                <li className={style["nav-item"]}><button className={`${style.btn} ${style["btn-header"]} ${style.fairy}`} id="fairy"onClick={()=>filterPokemonByType("fairy")}> Fairy</button></li>
                </ul>
           </nav>  
           

    )




}export default PokeBotones