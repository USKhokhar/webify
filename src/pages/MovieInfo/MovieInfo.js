import React from "react";
import { useLocation } from "react-router-dom";
import SimilarMovie from "../../components/SimilarMovie/SimilarMovie";
import "./MovieInfo.css";
import Navbar from "../../components/Navbar/Navbar";
import data from "../../movieData";
import Footer from "../../components/Footer/Footer";

const MovieInfo = () => {
  const state = useLocation();
  console.log(state.state);
  let genre = state.state.genre;
  let id = state.state.id;
  let arr = [0, 1, 2, 3, 4];
  let farr = arr.filter((e) => e !== id);
  console.log(farr);
  return (
    <div id="movieInfoWrapper">
      <Navbar />
      <div className="movieInfo">
        <div className="moviee">
          <div className="moiveImg">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEXqIiP////qHyDpAADrJSb+9PTqGhvpDA7pExTrLC397Oz1nZ3ygYLyiIj50NDyf3/tTk7vWVnrMjP5xcbwcnPzjo/3sbHvXl7uU1TpDxH4vb3zk5P/+vr2qan85eX3tbXtREX829vsOTrvZGT96Of83t771NTwcHHvYWL1mprxcnD4u7vrODjsQEH3tLT1o6IHv/RDAAAEU0lEQVR4nO3ba3uaMBgGYMxrE7TWwjxisVZru4Oz/f//bgKigbwB3XQj7rk/9SIxyQOUY/A8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEpCyIT4rZ+W2Qos1Zla1jZrO+UG6NOO7wUJT+3+jpja0pCXtE3CVpJ0x9Q3KtnbrOjVks+nTm/RX7cO4uVmtCJVDjktCzv7Bh5aZQNKC4ZGwcj3RCc2FpcIoT6Nhe9U3IJ3Ro2ez+WLqLfkOunOVyQLLZrjCrIKfu/0hA9JQnNsRXe7hPfG0n4xoewaNR6ZhJIe7N31AzpuR26dOZBQvbxVdjU/7qpuJqTHmq5abyLfU51MqMyRGbpt6W5CGdZ0lHpTwtWEQj3XdJQZk6sJ1feafnKvvpsJhazrJ/dGbiZkhmXzKp1MSP2abo7GysWE9d0crcnFhPK1phe9w45wMCFzP2A3kX83YXyJhNGIa/p9MOAWJ7+8asJ4M9Ntduey6yQckqIts4Ifrp2wSwXqWgnnSRPqq1nwFF09oVdynYRhet5r33DCaZbQTHIzCUMkREI9Yco8atkS6g8pxZUTfjELzk+4Hi92PsyzqyXhKtBshQMJrSzXNLGmtaEbTFgwQ0IkREKzAAndTzi6+YS9s+8PrZAwcZmEam62jITGciRkIGECCd1POLjBhHfDniZ519X4hPHHx+4W/8mc9mN7iuFrklYbn3CdPad5OTmhV9L4hN30cZIM3Ep4zqwvFxN63qTsWz5zz5mE0+qE1tmX7iScVCe0ukTC8qpjE+rPjNmESqsRPZlB+iQ8QczL4aGWUMjIlxdPGIQFbMLlsdKLYBN+nx5qdAT7lnvQIWKSZ/+gaTxF2x+jx5AKU0//PGEZ+5Zbs1BsQs1ESuZFqE06UyGNIj/3gxtMtamnF0/Iz1TQjGsThlK+1E5FPljv/8VpqP1mfJzy3syEHlVWKLeXBixOhOsfZpY3NeGmppuj7ECjytNtZ5E94XO62f9tQubtpa2/dHuIn8a48tNPQxMK/9TddEGWE+izL5qckDvj8LKrz2htloTW69JGJDx17t5gP1jm2PsUNTqhp06b2rZNNxQ70y/bf5ub0KP3mp4S91kKNuGs6QlP2U/zj43khCn8VA1P6PnTmq6SvvZXpMwklNbXZh9p0gNkTcR4dbjCppk5EK/ZZ4tscKuqes+d4y0E8/3JXDX6jJ8PPDK3zaGdSL9HokWpuJvvwc1OuLvlDZdsncK3eUlFVZzdHwcVTzHWf5QwZr+w1Hwo9tmfZqJvHEnBonw6786/UOlOfrcu9M29Do43/md8JZsdtX7vK9lS83Ut6CRRcL9YZjHj98Voa34jm+6ow/zSLZ5LfQX8nS+dz61QCpl836zaXjt5VB2VN1/Op9fPQb8/Hkri1oADKr/4TmVrwnc0HwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/C9+ARZultqQpurbAAAAAElFTkSuQmCC"
              alt=""
            />
            <a style={{ color: "white " }} href={data[genre][id].trailer_link}>
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
                <a href={data[genre][id].reviews.imdb}>ImDb</a>
              </span>
            </p>
            <p>
              <span className="key">Release Date</span>{" "}
              <span className="value">{data[genre][id].release_date}</span>
            </p>
            <p>
              <span className="key">Where To Watch</span>{" "}
              <span className="value">
                <a href={`https://www.${data[genre][id].where_to_watch}.com`}>
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
            top: "4.5rem",
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