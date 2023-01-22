import React from "react";
import "./SimilarMovie.css";
import { useNavigate } from "react-router-dom";
import data from "../../movieData";
import "../../App.css";
const SimilarMovie = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/movieInfo", {
      state: { genre: props.genre, id: props.id },
    });
  };

  return (
    <div
      id="similar"
      onClick={handleClick}
      className={`m2v${props.genre}${props.id}`}
    >
      {/* <img
        src="https://source.unsplash.com/random/100x100"
        alt=""
      /> */}
      <p
        className="smhead"
        style={{
          color: "hsl(0, 0%, 100%)",
          maxWidth: "80%",
          textAlign: "center",
          backgroundColor: 'hsl(309, 87%, 10%)',
          margin: 'auto'
        }}
      >
        {data[props.genre][props.id].title}
      </p>
    </div>
  );
};

export default SimilarMovie;