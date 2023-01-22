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
    <div onClick={handleClick}>
      <h1 className="smhead">{data[props.genre][props.id].title}</h1>
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEXqIiP////qHyDpAADrJSb+9PTqGhvpDA7pExTrLC397Oz1nZ3ygYLyiIj50NDyf3/tTk7vWVnrMjP5xcbwcnPzjo/3sbHvXl7uU1TpDxH4vb3zk5P/+vr2qan85eX3tbXtREX829vsOTrvZGT96Of83t771NTwcHHvYWL1mprxcnD4u7vrODjsQEH3tLT1o6IHv/RDAAAEU0lEQVR4nO3ba3uaMBgGYMxrE7TWwjxisVZru4Oz/f//bgKigbwB3XQj7rk/9SIxyQOUY/A8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEpCyIT4rZ+W2Qos1Zla1jZrO+UG6NOO7wUJT+3+jpja0pCXtE3CVpJ0x9Q3KtnbrOjVks+nTm/RX7cO4uVmtCJVDjktCzv7Bh5aZQNKC4ZGwcj3RCc2FpcIoT6Nhe9U3IJ3Ro2ez+WLqLfkOunOVyQLLZrjCrIKfu/0hA9JQnNsRXe7hPfG0n4xoewaNR6ZhJIe7N31AzpuR26dOZBQvbxVdjU/7qpuJqTHmq5abyLfU51MqMyRGbpt6W5CGdZ0lHpTwtWEQj3XdJQZk6sJ1feafnKvvpsJhazrJ/dGbiZkhmXzKp1MSP2abo7GysWE9d0crcnFhPK1phe9w45wMCFzP2A3kX83YXyJhNGIa/p9MOAWJ7+8asJ4M9Ntduey6yQckqIts4Ifrp2wSwXqWgnnSRPqq1nwFF09oVdynYRhet5r33DCaZbQTHIzCUMkREI9Yco8atkS6g8pxZUTfjELzk+4Hi92PsyzqyXhKtBshQMJrSzXNLGmtaEbTFgwQ0IkREKzAAndTzi6+YS9s+8PrZAwcZmEam62jITGciRkIGECCd1POLjBhHfDniZ519X4hPHHx+4W/8mc9mN7iuFrklYbn3CdPad5OTmhV9L4hN30cZIM3Ep4zqwvFxN63qTsWz5zz5mE0+qE1tmX7iScVCe0ukTC8qpjE+rPjNmESqsRPZlB+iQ8QczL4aGWUMjIlxdPGIQFbMLlsdKLYBN+nx5qdAT7lnvQIWKSZ/+gaTxF2x+jx5AKU0//PGEZ+5Zbs1BsQs1ESuZFqE06UyGNIj/3gxtMtamnF0/Iz1TQjGsThlK+1E5FPljv/8VpqP1mfJzy3syEHlVWKLeXBixOhOsfZpY3NeGmppuj7ECjytNtZ5E94XO62f9tQubtpa2/dHuIn8a48tNPQxMK/9TddEGWE+izL5qckDvj8LKrz2htloTW69JGJDx17t5gP1jm2PsUNTqhp06b2rZNNxQ70y/bf5ub0KP3mp4S91kKNuGs6QlP2U/zj43khCn8VA1P6PnTmq6SvvZXpMwklNbXZh9p0gNkTcR4dbjCppk5EK/ZZ4tscKuqes+d4y0E8/3JXDX6jJ8PPDK3zaGdSL9HokWpuJvvwc1OuLvlDZdsncK3eUlFVZzdHwcVTzHWf5QwZr+w1Hwo9tmfZqJvHEnBonw6786/UOlOfrcu9M29Do43/md8JZsdtX7vK9lS83Ut6CRRcL9YZjHj98Voa34jm+6ow/zSLZ5LfQX8nS+dz61QCpl836zaXjt5VB2VN1/Op9fPQb8/Hkri1oADKr/4TmVrwnc0HwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/C9+ARZultqQpurbAAAAAElFTkSuQmCC"
        alt=""
      />
    </div>
  );
};

export default SimilarMovie;