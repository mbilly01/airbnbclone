import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Hero from "./components/Hero";
import data from './data';
const ParentComponent = () => {

  const cardElement = data.map(data => <Card key={data.id}title={data.title} rating={data.rating} ratingCount={data.ratingCount} price={data.price} img={data.img} seat={data.seat}/>);
  return (
    <>
   <Header/>
   <Hero/>
   <section className="card-group">
   {cardElement}
   </section>
   
    </>
  );
}

export default ParentComponent;