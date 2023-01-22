import React from "react";
import "./Genre.css";
const Genre = () => {
  return (
    <div className="genre-corousel" id="home-corousel">
      {/* <div className="corousel-btn corousel-left">&larr;</div> */}
      {/* <div className="corousel-btn corousel-right"> &#8594;</div> */}
      <div id="slider">
        {/* <div className="control-btn"> */}
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
        {/* </div> */}

        <label htmlFor="s1" id="slide1">
          <div className="card genre-card">
            <img
              src="https://img.freepik.com/premium-photo/3d-illustration-halloween-concept-background-castle-graveyard-horror-background_685067-358.jpg?w=2000"
              alt=""
            />
            <p>HORROR1</p>
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
            <p>HORROR2</p>
            <button className="genre-action">ENTER</button>
          </div>
        </label>
        <label htmlFor="s3" id="slide3">
          <div className="card genre-card">
            <img
              src="https://img.freepik.com/premium-photo/3d-illustration-halloween-concept-background-castle-graveyard-horror-background_685067-358.jpg?w=2000"
              alt=""
            />
            <p>HORROR3</p>
            <button className="genre-action">ENTER</button>
          </div>
        </label>
        <label htmlFor="s4" id="slide4">
          <div className="card genre-card">
            <img
              src="https://img.freepik.com/premium-photo/3d-illustration-halloween-concept-background-castle-graveyard-horror-background_685067-358.jpg?w=2000"
              alt=""
            />
            <p>HORROR4</p>
            <button className="genre-action">ENTER</button>
          </div>
        </label>
        <label htmlFor="s5" id="slide5">
          <div className="card genre-card">
            <img
              src="https://img.freepik.com/premium-photo/3d-illustration-halloween-concept-background-castle-graveyard-horror-background_685067-358.jpg?w=2000"
              alt=""
            />
            <p>HORROR5</p>
            <button className="genre-action">ENTER</button>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Genre;