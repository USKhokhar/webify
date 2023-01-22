import React from "react";
import "./SimilarMovie.css";
import { useNavigate } from "react-router-dom";
import data from "../../movieData";
const SimilarMovie = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/movieInfo", {
      state: { genre: props.genre, id: props.id },
    });
  };

  return (
    <div id="similar" onClick={handleClick}>
        <img
        src="https://source.unsplash.com/random/100x100"
        alt=""
      />
        <p className="smhead" style={{  color: 'hsl(309, 87%, 70%)', maxWidth: '80%', textAlign: 'center' }}>{data[props.genre][props.id].title}</p>
    </div>
  );
};

export default SimilarMovie;
