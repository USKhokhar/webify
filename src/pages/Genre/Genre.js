import React from "react";
import "./Genre.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Genre = () => {
  const navigate = useNavigate();
  const romcom = 'https://media.istockphoto.com/id/875970634/vector/romantic-film-glyphs-vector-icon.jpg?s=612x612&w=0&k=20&c=s5BrM29Vxgtc9FI3yxT56XCSsSzYq1U18uxTjnkZnc0'
  return (
    <div className="genre-corousel" id="home-corousel">
      <h1>Explore The Realms!</h1>
      <div id="slider">
        <input
          type="radio"
          name="slider"
          className="control-menu"
          id="s1"
          defaultChecked
        />
        <input type="radio" name="slider" className="control-menu" id="s2" />
        <input type="radio" name="slider" className="control-menu" id="s3" />
        <input type="radio" name="slider" className="control-menu" id="s4" />
        <input type="radio" name="slider" className="control-menu" id="s5" />

        <label htmlFor="s1" id="slide1">
          <div className="card genre-card">
            <img
              src="https://i.giphy.com/media/lDifyB9R0iqWoDZoIT/giphy.gif"
              alt="action"
            />
            <p>ACTION</p>
            <button
              className="genre-action"
              onClick={() => {
                navigate("/movie", {
                  state: { genre: 4 },
                });
              }}
            >
              ENTER
            </button>
          </div>
        </label>
        <label htmlFor="s2" id="slide2">
          {" "}
          <div className="card genre-card">
            <img
              src='https://i.giphy.com/media/1AHE8DEiw1JG08bwHN/giphy.gif'
              alt=""
            />
            <p>ROM-COM</p>
            <button
              className="genre-action"
              onClick={() => {
                navigate("/movie", {
                  state: { genre: 1 },
                });
              }}
            >
              ENTER
            </button>
          </div>
        </label>
        <label htmlFor="s3" id="slide3">
          <div className="card genre-card">
            <img
              src="https://i.giphy.com/media/h5NLPVn3rg0Rq/giphy.gif"
              alt=""
            />
            <p>HORROR</p>
            <button
              className="genre-action"
              onClick={() => {
                navigate("/movie", {
                  state: { genre: 0 },
                });
              }}
            >
              ENTER
            </button>
          </div>
        </label>
        <label htmlFor="s4" id="slide4">
          <div className="card genre-card">
            <img
              src="https://i.giphy.com/media/jAe22Ec5iICCk/giphy.gif"
              alt=""
            />
            <p>ANIME</p>
            <button
              className="genre-action"
              onClick={() => {
                navigate("/movie", {
                  state: { genre: 3 },
                });
              }}
            >
              ENTER
            </button>
          </div>
        </label>
        <label htmlFor="s5" id="slide5">
          <div className="card genre-card">
            <img
              src="https://i.giphy.com/media/8Pa7JAeyhfAeC0IFP8/giphy.gif"
              alt=""
            />
            <p>MYSTERY</p>
            <button
              className="genre-action"
              onClick={() => {
                navigate("/movie", {
                  state: { genre: 2 },
                });
              }}
            >
              ENTER
            </button>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Genre;