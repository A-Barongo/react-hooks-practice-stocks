import React from "react";

function Stock({name,price,onClick}) {
  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={onClick}>
          <h5 className="card-title" value={name}>{name}</h5>
          <p className="card-text" value={price}>{price}</p>
        </div>
      </div>
    </div>
  )
}
export default Stock;
