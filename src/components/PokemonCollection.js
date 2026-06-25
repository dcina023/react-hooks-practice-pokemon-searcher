import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons }) {
  return (
    <>
      <h1>Hello From Pokemon Collection</h1>
      <Card.Group itemsPerRow={6}>
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            name={pokemon.name}
            hp={pokemon.hp}
            sprites={pokemon.sprites}
          />
        ))}
      </Card.Group>
    </>
  );
}

export default PokemonCollection;
