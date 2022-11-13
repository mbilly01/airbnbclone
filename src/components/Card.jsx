import React from "react";
const Card = (props) => {
  let soldOut;
  if(props.seat === 0) {
     soldOut = true;
  }


  return (
    <section className="card">
      <section className="card-img-and-rating">
        {soldOut ? <p className="sold-out">Sold Out</p> : <p className="online">Online</p>}
        <img src={props.img} alt="" />
        <p>{props.rating} ({props.ratingCount})</p>
      </section>
      <section className="card-description">
        {props.title}
        <section className="card-price">
          From ${props.price}/Person
        </section>
      </section>
    </section>
  );
}

export default Card;
