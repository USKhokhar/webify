import React from "react";
import "./Genre.css";
const Genre = () => {
  return (
    // <div className="genre-corousel">
    <div id="slider">
      <input type="radio" name="slider" id="s1" />
      <input type="radio" name="slider" id="s2" />
      <input type="radio" name="slider" id="s3" defaultChecked />
      <input type="radio" name="slider" id="s4" />
      <input type="radio" name="slider" id="s5" />
      {/* <div className="labels"> */}
      <label htmlFor="s1" id="slide1">
        {" "}
        <div className="card genre-card">
          <img
            src="https://img.freepik.com/premium-photo/3d-illustration-halloween-concept-background-castle-graveyard-horror-background_685067-358.jpg?w=2000"
            alt=""
          />
          <p>HORROR</p>
          <button className="genre-action">ENTER</button>
        </div>
      </label>
      <label htmlFor="s2" id="slide2">
        {" "}
        <div className="card genre-card">
          <img
            src="https://img.freepik.com/premium-photo/3d-illustration-halloween-concept-background-castle-graveyard-horror-background_685067-358.jpg?w=2000"
            alt=""
          />
          <p>HORROR</p>
          <button className="genre-action">ENTER</button>
        </div>
      </label>
      <label htmlFor="s3" id="slide3">
        {" "}
        <div className="card genre-card">
          <img
            src="https://img.freepik.com/premium-photo/3d-illustration-halloween-concept-background-castle-graveyard-horror-background_685067-358.jpg?w=2000"
            alt=""
          />
          <p>HORROR</p>
          <button className="genre-action">ENTER</button>
        </div>
      </label>
      <label htmlFor="s4" id="slide4">
        {" "}
        <div className="card genre-card">
          <img
            src="https://img.freepik.com/premium-photo/3d-illustration-halloween-concept-background-castle-graveyard-horror-background_685067-358.jpg?w=2000"
            alt=""
          />
          <p>HORROR</p>
          <button className="genre-action">ENTER</button>
        </div>
      </label>
      <label htmlFor="s5" id="slide5">
        {" "}
        <div className="card genre-card">
          <img
            src="https://img.freepik.com/premium-photo/3d-illustration-halloween-concept-background-castle-graveyard-horror-background_685067-358.jpg?w=2000"
            alt=""
          />
          <p>HORROR</p>
          <button className="genre-action">ENTER</button>
        </div>
      </label>
      {/* </div> */}
    </div>
    // </div>
  );
};

export default Genre;
