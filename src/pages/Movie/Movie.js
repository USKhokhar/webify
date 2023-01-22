import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./Movie.css";
import { useLocation } from "react-router-dom";
import data from "../../movieData";
import Footer from "../../components/Footer/Footer";
import '../../App.css'

const Movie = () => {
  const navigate = useNavigate();
  const state = useLocation();
  console.log(state.state.genre);
  let genre = state.state.genre;
  console.log(data[genre]);
  const layerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const src = "./home-bg-desktop.png";

  const MovieCard = ({ title, description, cl, movieId }) => {
    return (
      <section className={cl}>
        <article className="mv-txt-content">
          <h3>{title}</h3>
          <sub>{description}</sub>

          <button
            onClick={() => {
              navigate("/movieInfo", {
                state: { genre: genre, id: movieId },
              });
            }}
          >
            Know more
          </button>
        </article>
      </section>
    );
  };

  return (
    <>
      <img src={src} alt="bg" className="mv-bg" />
      <Navbar />

      <Parallax pages={6}>
        <ParallaxLayer
          style={layerStyle}
          offset={0}
          sticky={{ start: 0, end: 5 }}
          speed={2.5}
        >
          <MovieCard
            cl={`mv-section ${data[genre][0].cls}`}
            title={data[genre][0].title}
            description={data[genre][0].description}
            movieId={0}
            />
        </ParallaxLayer>
        <ParallaxLayer
          style={layerStyle}
          offset={1}
          sticky={{ start: 1, end: 5 }}
          speed={2.5}
          >
          <MovieCard
            cl={`mv-section ${data[genre][1].cls}`}
            title={data[genre][1].title}
            description={data[genre][1].description}
            movieId={1}
            />
        </ParallaxLayer>

        <ParallaxLayer
          style={layerStyle}
          offset={2}
          sticky={{ start: 2, end: 5 }}
          speed={2.5}
          >
          <MovieCard
          cl={`mv-section ${data[genre][2].cls}`}
          title={data[genre][2].title}
          description={data[genre][2].description}
          movieId={2}
          />
        </ParallaxLayer>

        <ParallaxLayer
          style={layerStyle}
          offset={3}
          sticky={{ start: 3, end: 5 }}
          speed={2.5}
          >
          <MovieCard
          cl={`mv-section ${data[genre][3].cls}`}
          title={data[genre][3].title}
          description={data[genre][3].description}
          movieId={3}
          />
        </ParallaxLayer>

        <ParallaxLayer
          style={layerStyle}
          offset={4}
          sticky={{ start: 4, end: 5 }}
          speed={2.5}
          >
          <MovieCard
            cl={`mv-section ${data[genre][4].cls}`}
            title={data[genre][4].title}
            description={data[genre][4].description}
            movieId={4}
          />
        </ParallaxLayer>
      </Parallax>
      <Footer />
    </>
  );
};

export default Movie;