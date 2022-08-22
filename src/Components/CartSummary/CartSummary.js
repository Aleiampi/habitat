import React from "react";

export default function CartSummary({ cantidad, total }) {
  return (
    <div className="row border-top border-bottom">
      <div className="row main align-items-center cartSummary">
        <div className="col-5">
          <div>
            <h5>
              <b>Total</b>
            </h5>
          </div>
        </div>
        <div className="col"></div>
        <div className="col">
          <p>{cantidad}</p>
        </div>
        <div className="col ">{total}</div>
      </div>
    </div>
  );
}
