import React from "react";
import { useCharStates } from "../Context/Context";
import Card from "../Components/Card";
import withErrorBoundary from "../withErrorBoundary";

const Favs = () => {
  const {
    state: { favs },
  } = useCharStates();

  return (
    <div>
      {favs.map((char) => (
        <Card key={char.id} char={char} />
      ))}
    </div>
  );
};

export default withErrorBoundary(Favs);
