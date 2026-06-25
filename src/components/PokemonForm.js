import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon }) {
  const [formSubmission, setFormSubmission] = useState({
    name: "",
    hp: "",
    id: "",
    sprites: {
      front: "",
      back: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormSubmission((prevPokemon) => ({
      ...prevPokemon,
      [name]: value,
    }));
  };
  const handleNestedChange = (e) => {
    const { name, value } = e.target;
    setFormSubmission((prevPokemon) => ({
      ...prevPokemon,
      sprites: {
        ...prevPokemon.sprites,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddPokemon(formSubmission);

    setFormSubmission({
      name: "",
      hp: "",
      sprites: {
        front: "",
        back: "",
      },
    });
  };

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={formSubmission.name}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            value={formSubmission.hp}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            value={formSubmission.sprites.front}
            onChange={handleNestedChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            value={formSubmission.sprites.back}
            onChange={handleNestedChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
