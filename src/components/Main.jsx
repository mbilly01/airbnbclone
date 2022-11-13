import React from "react";
import Card from './Card';
import data from '../data';
const Main = () => {

  return (
    <section className="card-group">
      {data.map(item => {
        return <Card key={item.id}item={item}/>
      })}
    </section>
  );
}

export default Main;