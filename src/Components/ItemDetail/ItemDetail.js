import { useState } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import AddButton from "../Button/Button";
import { useNavigate } from "react-router-dom";
import './ItemDetail.css'

export default function ItemDetail({product}) {

    const [show, setShow] = useState(true);

    const clicky = () => {
        setShow (false)
    }

    const navigateToCart = useNavigate();
    const toCart = ()=>{
        navigateToCart(`/cart`)
    }

    if (show){

        return (
         
            <Container className="itemDetail">
                <Row>
                    <Col>
                        <Image src={product.image} className="detailImg"  />
    
                    </Col>
                    <Col>
                        <h4>{product.title}</h4>
                        <p className="detailDescription"> {product.description}</p>
                        <ItemCount stock={5} initial={1} />
                        <AddButton textOnBtn={"Agregar"} handleClick={clicky} />
                    </Col>
                </Row>
            </Container>
        
        )
    }else{

        return (
         
            <Container className="itemDetail">
                <Row>
                    <Col>
                        <Image src={product.image} className="detailImg"  />
    
                    </Col>
                    <Col>
                        <h4>{product.title}</h4>
                        <p className="detailDescription"> {product.description}</p>
                        <ItemCount stock={5} initial={1} />
                        <AddButton textOnBtn={"Go to Cart"} handleClick={toCart} />
                    </Col>
                </Row>
            </Container>
        
        )
    }

}