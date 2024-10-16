import React from "react";

function Card(props) {


  return (
    
    <div className="card" style={{width: '18rem'}}>
      <img src={props.img1} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title text-center">{props.title1}</h5>
        <p className="card-text text-center">
          {props.descripcion}
        </p>
        <a href="#" className="btn btn-primary d-flex justify-content-center fs-3">
          <span className="text-dark">Buy</span>
        </a>
      </div>
    </div>

  );
}

export default Card;
