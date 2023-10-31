import { useContext } from "react";
import { PokemonContext } from "./PokemonDatas";


function PokemonList() {
  const { pokemonList } = useContext(PokemonContext);

  const filteredList = pokemonList.filter((_, index) => index % 2 === 0);
  return (
    <div>
      <div>
        <h2 >Pokemon Genap</h2>
        <ul>
        {filteredList.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
        </ul>

      </div>
      
    </div>
  );
}

export default PokemonList;
