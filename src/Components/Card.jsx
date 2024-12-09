import React from "react";
import { Link } from "react-router-dom";
import { useCharStates } from "../Context/Context";
import { toast } from "react-toastify";

const Card = ({ char }) => {
  const {
    dispatch,
    state: { favs },
  } = useCharStates();

  const findFav = favs.find((fav) => fav.id === char.id);
  // console.log(findFav);
  const addFav = () => {
    dispatch({ type: findFav ? "DELETE_FAV" : "ADD_FAV", payload: char });
    if (findFav) {
      toast.error("Favorito removido");
    } else {
      toast.success("Favorito agregado");
    }
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
