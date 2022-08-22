import React from "react";

import ItemCount from "../ItemCount/ItemCount";
import  AddButton  from "../Button/Button";
import { Row, Col, Image } from "react-bootstrap";

// import React from 'react';

export const CartItem = ({ product, deleteItem }) => {




  
  return (
    <>
            <Row className="border-bottom align-items-center p-1 my-4 ">
                <Col  className="">
                    <Image src={product.image} className="img-fluid"  />
                </Col>
                <Col s={8} className="col-6">
                    <div className=" text-muted">{product.title}</div>
                </Col>
                <Col s={1} className="text-center">
                    <p>${product.price} c/u</p>
                </Col>
                <Col s={1} className="text-center">
                    <p>{product.quantity}</p>
                </Col>
                <Col s={1} className="text-center">
                    <p>$ {product.subtotal}</p>
                </Col>
                {/* <Col className="col">

                </Col> */}
                <Col s={1} className="">
                    <AddButton
                    textOnBtn="Borrar item"
                    handleClick={() => deleteItem(product.id)}
                    />
                </Col>
            </Row>
      
      
    </>
  );
};

