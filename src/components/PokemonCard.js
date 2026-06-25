import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, hp, sprites }) {
  const [flippedCard, setFlippedCard] = useState(false);

  const handleFlip = () => {
    setFlippedCard(!flippedCard);
  };
  return (
    <Card onClick={handleFlip}>
      <div className="image">
        <img
          src={flippedCard ? sprites?.back : sprites?.front}
          alt={flippedCard ? `${name} back` : `${name} front`}
        />
      </div>

      <div className="content">
        <div className="header">{name}</div>
      </div>

      <div className="extra content">
        <span>
          <i className="icon heartbeat red" />
          {hp}
        </span>
      </div>
    </Card>
  );
}

export default PokemonCard;
