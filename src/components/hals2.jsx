import { useContext } from "react";
import { PokemonContext } from "./PokemonDatas";
 

function PokemonPage() {
    const { pokemonList } = useContext(PokemonContext);

    const filteredList = pokemonList.filter((_, index) => index % 2 === 1);
    return (
    <div>
        <div className="content2">
            <h2 >Pokemon Ganjil</h2>
            <ul>
                {filteredList.map((pokemon, index) => (
                    <li key={index}>{pokemon.name} </li>
                    
                ))}
            </ul>
        </div>
        
    </div>
    );
}

export default PokemonPage;
