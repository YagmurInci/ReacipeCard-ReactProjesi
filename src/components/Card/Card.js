import React from "react";
import "./Card.css";
import heartOutline from "../../assets/heart-outline.png";
import heartFill from "../../assets/heart-fill.png";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="profile">
          <span className="letter">{props.author[0]}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{props.title}</h5>
          <div className="card-date">{props.date}</div>
        </div>
      </div>

      <img className="card-image" src={props.food} alt="Yemek görseli" />

      <div className="card-text">{props.description}</div>

      <div className="card-like-bar">
        <img
          className="card-like-icon"
          src={props.liked ? heartFill : heartOutline}
          alt={props.liked ? "Beğenildi" : "Beğenilmedi"}
        />
        <div className="like-text">
          <b>{props.likeCount}</b> kişi bu tarifi beğendi.
        </div>
      </div>
    </div>
  );
}
