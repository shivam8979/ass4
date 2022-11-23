import React from "react";

const Card = (props) => {
  return <>
    <div className="main">
      <div className="cards" style={{ backgroundColor: props.hashcode }}>
        <div className="title">
          <h3>{props.title}</h3>
          <h4 style={{color:props.color}}>{props.color}</h4>
        </div>
      </div>

      
    </div>
  </>;
};

export default Card;