import { Card } from "react-bootstrap";
import './Item.css'

export default function Item ({product}) {

    return(
        <Card className="card-item">
            <Card.Img variant="top" src={product.image} className="cardImage"/>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
            </Card.Body>
             
        </Card>
    )
 
}