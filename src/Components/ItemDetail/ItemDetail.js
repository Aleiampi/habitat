import { useState, useContext } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import AddButton from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import "./ItemDetail.css";

export default function ItemDetail({ product }) {
  const [show, setShow] = useState(true);
  const { addToCart } = useContext(CartContext);
  const { cartArray } = useContext(CartContext);

  const onAdd = (quantity) => {
    addToCart(product, quantity);
    console.log(cartArray);

    setShow(false);
  };

  const navigateToCart = useNavigate();
  const toCart = () => {
    navigateToCart(`/cart`);
  };

  const navigateToCategory = useNavigate();
  const toCategory = () => {
    navigateToCategory(`/category/${product.category}`);
  };

  const navigateToHome = useNavigate();
  const toHome = () => {
    navigateToHome(`/`);
  };

  if (show) {
    return (
      <Container className="itemDetail">
        <Row>
          <Col>
            <Image src={product.image} className="detailImg" />
          </Col>
          <Col>
            <h4>{product.title}</h4>
            <p className="detailDescription"> {product.description}</p>
            <h5>$ {product.price} each</h5>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
          </Col>
          <Row>
            <Col>
              <AddButton
                textOnBtn={"Similar products"}
                handleClick={toCategory}
              />
            </Col>
            <Col>
              <AddButton textOnBtn={"All products"} handleClick={toHome} />
            </Col>
          </Row>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container className="itemDetail">
        <Row>
          <Col>
            <Image src={product.image} className="detailImg" />
          </Col>
          <Col>
            <h4>{product.title}</h4>
            <p className="detailDescription"> {product.description}</p>
            <h5>$ {product.price} each</h5>
            <AddButton textOnBtn={"Go to Cart"} handleClick={toCart} />
          </Col>
          <Row>
            <Col>
              <AddButton
                textOnBtn={"Similar products"}
                handleClick={toCategory}
              />
            </Col>
            <Col>
              <AddButton textOnBtn={"All products"} handleClick={toHome} />
            </Col>
          </Row>
        </Row>
      </Container>
    );
  }
}
