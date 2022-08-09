import { Card, Container, Image, Row, Col } from "react-bootstrap";
// import AddButton from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
import './itemDetail.css'

export default function ItemDetail({product, key}) {

    const onAdd = () => {
 
        alert("se agregaron ")

    }


    return (
     
        <Container className="itemDetail">
            <Row>
                <Col>
                    <Image src={product.image} className="detailImg"  />

                </Col>
                <Col>
                    <h4>{product.title}</h4>
                    <p className="detailDescription"> {product.description}</p>
                    {/* <ItemCount stock={5} initial={1}/> */}
                </Col>
            </Row>
      
        </Container>
    
    )
}