import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import AddButton from "../Button/Button";
import { Link } from "react-router-dom";
import { CartItem } from "../CartItem/CartItem";
import CartSummary from "../CartSummary/CartSummary";
import { Container, Card, Row, Col, Alert } from "react-bootstrap";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useForm } from "react-hook-form"; ///form validation library

const Cart = () => {
  const { cartArray } = useContext(CartContext);
  const { clearCart } = useContext(CartContext);
  const { addToCart } = useContext(CartContext);
  const { deleteFromCart } = useContext(CartContext);
  const { totalGastado } = useContext(CartContext);
  const { totalItems } = useContext(CartContext);

  const [order, setOrder] = useState(false);
  const [orderID, setOrderID] = useState({ id: "" });

  const [user, setUser] = useState([]);

  const [show, setShow] = useState(false);

  const userData = (data) => {
    const newUser = {
      firstName: data.firstName,
      lastName: data.lastName,
      mobileNumber: data.mobileNumber,
      email: data.email,
    };
    setUser(newUser);
    console.log(user);
    setShow(true);
  };

  const createOrder = () => {
    const collectionOrders = collection(db, "orders");

    const order = {
      user,
      cartArray,
      totalGastado,
      created_at: serverTimestamp(),
    };

    const pedido = addDoc(collectionOrders, order);

    pedido.then((res) => {
      setOrder(res);
      console.log(res.id);
      setOrderID(res.id);
      console.log(orderID);
    });
  };

  const checkOut = () => {
    createOrder();
    clearCart();
  };

  //form
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  return (
    <>
      <Container>
        <Card>
          {cartArray.length === 0 && (
            <div>
              <Card.Header>
                <h3>Cart</h3>
              </Card.Header>
              <Card.Body>
                <p>The cart is empty</p>
                <Link to="/">Home</Link>
              </Card.Body>
            </div>
          )}

          {cartArray.length > 0 && (
            <div>
              <Card.Header>
                <h3>Cart</h3>
              </Card.Header>
              <Card.Body>
                <Row className=" border-bottom align-items-center p-1 m-1 g-">
                  <Col s={8} className="col-6">
                    <div className=" text-muted h5">Product</div>
                  </Col>
                  <Col s={1} className="text-center h6">
                    <p> Price </p>
                  </Col>
                  <Col s={1} className="text-center h6">
                    <p>Quantity</p>
                  </Col>
                  <Col s={1} className="text-center h6">
                    <p>Subtotal</p>
                  </Col>
                  <Col s={1} className=""></Col>
                </Row>
                <div>
                  {cartArray.map((item) => (
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
                <div>
                  <Container className="m-2 p-2">
                    <h4>Please add your info to confirm your order:</h4>
                    <form onSubmit={handleSubmit(userData)}>
                      <input
                        type="text"
                        placeholder="First name"
                        {...register("firstName", {
                          required: "This is required",
                          min: 3,
                          maxLength: 80,
                          pattern: {
                            value: /^[A-Za-z]+$/,
                            message: "Enter a valid name",
                          },
                        })}
                      />
                      <p>{errors.firstName?.message}</p>
                      <input
                        type="text"
                        placeholder="Last name"
                        {...register("lastName", {
                          required: "This is required",
                          maxLength: 100,
                          pattern: {
                            value: /^[A-Za-z]+$/,
                            message: "Enter a valid name",
                          },
                        })}
                      />
                      <p>{errors.lastName?.message}</p>
                      <input
                        type="tel"
                        placeholder="Mobile number"
                        {...register("mobileNumber", {
                          required: "This is required",
                          minLength: {
                            value: 6,
                            message: "The number is too short",
                          },
                          maxLength: {
                            value: 12,
                            message: "The number is too long",
                          },
                          pattern: {
                            value: /^[0-9]+$/,
                            message: "enter a valid phone number",
                          },
                        })}
                      />
                      <p>{errors.mobileNumber?.message}</p>

                      <input
                        type="email"
                        placeholder="Email"
                        {...register("email", {
                          required: true,
                          pattern: {
                            value:
                              /^[[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "Please enter a valid email",
                          },
                        })}
                      />
                      {errors.email && <p>{errors.email.message}</p>}

                      <input
                        type="email"
                        placeholder="Confirm Email"
                        {...register("emailConfirmation", {
                          required: true,
                          pattern: {
                            value:
                              /^[[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "Please enter a valid email",
                          },
                          validate: {
                            matchesPreviousEmail: (value) => {
                              const { email } = getValues();
                              return email === value || "Email does not match";
                            },
                          },
                        })}
                      />

                      {errors.emailConfirmation && (
                        <p>{errors.emailConfirmation.message}</p>
                      )}

                      <button type="submit">Add info</button>
                    </form>
                  </Container>
                </div>
                {show && (
                  <AddButton textOnBtn="Confirm order" handleClick={checkOut} />
                )}
              </Card.Footer>
            </div>
          )}

          {order && (
            <Alert>
              <p>Thank you for your purchase {user.firstName} !</p>
              <p>Your order number is: {orderID}</p>
            </Alert>
          )}
        </Card>
      </Container>
    </>
  );
};

export default Cart;
