import React from "react";
import "./Genre.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Genre = () => {
  const navigate = useNavigate();
  return (
    <div className="genre-corousel" id="home-corousel">
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
              src="https://img.freepik.com/premium-photo/3d-illustration-halloween-concept-background-castle-graveyard-horror-background_685067-358.jpg?w=2000"
              alt=""
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
              src="https://img.freepik.com/premium-photo/3d-illustration-halloween-concept-background-castle-graveyard-horror-background_685067-358.jpg?w=2000"
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
              src="https://img.freepik.com/premium-photo/3d-illustration-halloween-concept-background-castle-graveyard-horror-background_685067-358.jpg?w=2000"
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
              src="https://img.freepik.com/premium-photo/3d-illustration-halloween-concept-background-castle-graveyard-horror-background_685067-358.jpg?w=2000"
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
              src="https://img.freepik.com/premium-photo/3d-illustration-halloween-concept-background-castle-graveyard-horror-background_685067-358.jpg?w=2000"
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