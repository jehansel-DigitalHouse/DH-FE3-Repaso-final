import React from "react";
import { Link } from "react-router-dom";
import { useCharStates } from "../Context/Context";

const Card = ({ char }) => {
  const {
    dispatch,
    state: { favs },
  } = useCharStates();

  const findFav = favs.find((fav) => fav.id === char.id);
  // console.log(findFav);
  const addFav = () => {
    dispatch({ type: findFav ? "DELETE_FAV" : "ADD_FAV", payload: char });
  };

  return (
    <div>
      <Link to={`/detail/${char.id}`}>
        <img src={char.image} alt="" />
        <h3>{char.name}</h3>
      </Link>
      <button onClick={addFav}>{findFav ? "🌟" : "⭐"}</button>
    </div>
  );
};

export default Card;

//Lo que teniamos antes en addFav()
// if (findFav) {
//   dispatch({ type: "DELETE_FAV", payload: char });
// } else {
//   dispatch({ type: "ADD_FAV", payload: char });
// }

// setFavs((favs) => [...favs, char]);
