import style from "./pokemoncard.module.css"
import sty from "./pokemonboton.module.css"
function PokeCard({id,name,image,types}){



    return(
        <div className={style.pokemon}>
           
            <div className={style["pokemon-imagen"]}>
            <img className={style.imagen} src={image}></img></div>
            <div className={style["pokemon-info"]}>
                <div className={style["contenedor-nombre"]}>
                <div className={style["pokemon-id"]}>{`#${String(id).padStart(3,'0')}`}</div>
                    <div className={style["pokemon-nombre"]}>{name}</div>
                </div>
            <div className={style.types}>
                {
                    types.map((type,index)=>(
                        <div key={index} className={sty[type.type.name]} id={style.tipo}>
                            {type.type.name}
                        </div>
                    ))
                }
            </div>
            </div>
        </div>



    );
}
export default PokeCard;