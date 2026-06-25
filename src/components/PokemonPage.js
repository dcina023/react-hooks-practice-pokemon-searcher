import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemon] = useState([]);
  const [search, setSearch] = useState("");

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

  const filteredPokemon = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase());
  });

  function handleAddPokemon(newPokemon) {
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPokemon),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Adding Pokemon Failed!");
        return res.json();
      })
      .then((savedPokemon) => {
        setPokemon((currentPokemon) => [...currentPokemon, savedPokemon]);
      })
      .catch(console.error);
  }
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon} />
      <br />
      <Search search={search} setSearch={setSearch} />
      <br />
      <PokemonCollection pokemons={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;
