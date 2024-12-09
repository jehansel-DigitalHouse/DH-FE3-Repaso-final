import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withErrorBoundary from "../withErrorBoundary";

const Detail = () => {
  const [char, setChar] = useState({});
  const params = useParams();
  // console.log(params);
  const url = "https://rickandmortyapi.com/api/character/" + params.id;

  useEffect(() => {
    // axios(url)
    //   .then((res) => {
    //     // console.log(res.data);
    //     setChar(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    const getChar = async () => {
      try {
        const res = await axios(url);
        console.log(res);
        setChar(res.data);
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error al traer el detalle",
        });
      }
    };
    getChar();
  }, []);

  return (
    <div>
      <h2>{char.name}</h2>
      <img src={char.image} alt="" />
      <h4>Status: {char.status}</h4>
      <h4>Especie: {char.species}</h4>
    </div>
  );
};

export default withErrorBoundary(Detail);
