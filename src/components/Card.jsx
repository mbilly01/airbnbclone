import React from "react";
import logo from '../img/logo.svg';
const Card = (props) => {
  console.log(props.item.imageUrl)
  return (
    <section className="card">
      <section className="card-img">
        <img src={`../img/${props.item.imageUrl}`} alt="" />
      </section>
      <section className="card-text">
        <section className="card-location">
          <img src={logo} alt="" />
          <h3>{props.item.location}</h3>
          <a href={props.item.googleMapLink}>View On Google Map</a>
        </section>
        <h1>{props.item.title}</h1>
        <section className="card-description">
          <strong>{props.item.startDate} - {props.item.endDate}</strong>
          <p>{props.item.description}</p>
     
        
        </section>
      </section>
    </section>
  );
}

export default Card;