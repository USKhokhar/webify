import React from "react";
import { useLocation } from "react-router-dom";
import SimilarMovie from "../../components/SimilarMovie/SimilarMovie";
import "./MovieInfo.css";
import Navbar from "../../components/Navbar/Navbar";
import data from "../../movieData";
import Footer from "../../components/Footer/Footer";
import "../../App.css";
const MovieInfo = () => {
  const state = useLocation();
  // console.log(state.state);
  let genre = state.state.genre;
  let id = state.state.id;
  let arr = [0, 1, 2, 3, 4];
  let farr = arr.filter((e) => e !== id);
  // console.log(farr);
  const bg = "./home-bg-desktop.png";
  return (
    <div id="movieInfoWrapper">
      <img src={bg} className="bg" />
      <Navbar />
      <div className="movieInfo">
        <div className="moviee">
          <div className={`moiveImg m2v${genre}${id}`}>
            <a style={{ color: "white ", backgroundColor: 'hsl(309, 87%, 10%)' }} href={data[genre][id].trailer_link} target='_blank'>
              Watch Trailer
            </a>
          </div>
          <div className="moiveDetail">
            <h2
              style={{
                color: "#F56FE2",
                fontSize: "2.4rem",
                fontWeight: "500",
              }}
            >
              {data[genre][id].title}
            </h2>
            <p>
              <span className="key">Duration</span>{" "}
              <span className="value">{data[genre][id].duration}</span>
            </p>
            <p className="key">Short Description</p>
            <p className="value" id="movieDesc">
              {data[genre][id].description}
            </p>
            <p>
              <span className="key">Rating</span>{" "}
              <span className="value">{data[genre][id].rating}</span>
            </p>
            <p>
              <span className="key">Reviews</span>{" "}
              <span className="value">
                <a href={data[genre][id].reviews.rottenToamtoes}>
                  Rotten Tomatos
                </a>
              </span>
              <span className="value">
                <a href={data[genre][id].reviews.imdb} target='_blank'>ImDb</a>
              </span>
            </p>
            <p>
              <span className="key">Release Date</span>{" "}
              <span className="value">{data[genre][id].release_date}</span>
            </p>
            <p>
              <span className="key">Where To Watch</span>{" "}
              <span className="value">
                <a href={`https://www.${data[genre][id].where_to_watch}.com`} target='_blank'>
                  {data[genre][id].where_to_watch}
                </a>
              </span>
            </p>
            <p>
              <span className="key">Cast</span>{" "}
              <span className="value">{data[genre][id].cast}</span>
            </p>
          </div>
        </div>

        <h1
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "2rem",
            position: "relative",
            top: "8rem",
            fontWeight: "400",
          }}
        >
          Similar Movies
        </h1>
        <div className="similarMovie">
          {farr.map((e) => {
            return (
              <div className="moreMovie">
                <SimilarMovie genre={genre} id={e} />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default MovieInfo;