import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemon] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((res) => {
        if (!res.ok) throw new Error("Fetch Failed!");
        return res.json();
      })
      .then((pokemons) => {
        setPokemon(pokemons);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search />
      <br />
      <PokemonCollection pokemons={pokemons}/>
    </Container>
  );
}

export default PokemonPage;
