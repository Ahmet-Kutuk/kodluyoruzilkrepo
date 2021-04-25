import React from "react";
import {useState} from 'react';
import "./Card.css";
import heartOutline from "../../assets/heart-outline.png"; // Tell webpack this JS file uses this image
import heartFill from "../../assets/heart-fill.png"; // Tell webpack this JS file uses this image

export default function Card(props) {
  const [islike,setisLike] = useState(false);
  const [likeCount,setlikeCount] = useState(193);

  function like() {
    if (islike)
    {
      setisLike(false);
      setlikeCount(likeCount-1);
    }
    else{
      setisLike(true);
      setlikeCount(likeCount+1)
    }
    console.log(islike);
  }
  
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
      <img className="card-image" src={props.image} alt="Logo" />
      <div className="card-text">{props.description}</div>
      <div className="card-like-bar">
        {islike ? (
          <button onClick={like}  className="like-button" ><img className="card-like-icon" src={heartFill} alt="Logo" /></button>
        ) : (
          <button  onClick={like} className="like-button" ><img className="card-like-icon" src={heartOutline} alt="Logo" /></button>
        )}
        <div className="like-text">
          <b>{likeCount}</b> kişi bu tarifi beğendi.
        </div>
      </div>
    </div>
  );
}
