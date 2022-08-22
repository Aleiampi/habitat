// import React from 'react'
// import { Alert } from 'react-bootstrap'

// const Cart = () => {
//   return (
//     <Alert>Cart</Alert>
//   )
// }

// export default Cart;

import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import AddButton from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartItem } from "../CartItem/CartItem";
import CartSummary from "../CartSummary/CartSummary";
// import './Cart.css'
import { Container, Card , Row, Col} from "react-bootstrap";

const Cart = () => {
  const { cartArray } = useContext(CartContext);
  const { clearCart } = useContext(CartContext);
  const { addToCart } = useContext(CartContext);
  const { deleteFromCart } = useContext(CartContext);
  const { totalGastado } = useContext(CartContext);
  const { totalItems } = useContext(CartContext);

  return (


<>


  <Container>
    <Card>
      <Card.Header>
        <h3>Cart</h3>
      </Card.Header>
      <Card.Body>
            <Row className=" border-bottom align-items-center p-1 m-1 g-">
              <Col  s={8} className="col-6">
                  <div className=" text-muted h5">Product</div>
              </Col>
              <Col s={1}className="text-center h6">
                  <p> Price </p>
              </Col>
              <Col s={1}className="text-center h6">
                  <p>Quantity</p>
              </Col>
              <Col s={1}className="text-center h6">
                  <p>Subtotal</p>
              </Col>
              {/* <Col s={1}className="">

              </Col> */}
              <Col s={1}className="">
            
              </Col>
            </Row>
        <div >
        {cartArray.length === 0 && (
                    <div>
                      <p>The cart is empty</p>
                      <Link to="/">Home</Link>
                    </div>
                  )}
                  {cartArray.length > 0 &&
                    cartArray.map((item) => (
                      <CartItem
                        identif={item.id}
                        product={item}
                        deleteItem={deleteFromCart}
                        addToCart={addToCart}
                      />
                    ))}
        </div>
      </Card.Body>
      <Card.Footer>
        <CartSummary cantidad={totalItems} total={totalGastado} />
        <div className="col">
            <AddButton textOnBtn="Clear cart" handleClick={clearCart} />
          </div>
      </Card.Footer>
    </Card>


  </Container>


</>
  );

};



export default Cart;
