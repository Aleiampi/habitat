import { Card } from "react-bootstrap";
import AddButton from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
import './Item.css'

export default function Item ({product}) {

    const navigateFn = useNavigate();

    const showDetails = () => {
            navigateFn(`/product/${product.id}`)
  }
    

    return(
        <Card className="card-item">

            <Card.Img variant="top" src={product.image} className="cardImage"/>
            <Card.Body className="cardBody">
                <Card.Title className="cardTitle">{product.title}</Card.Title>
                <Card.Text>$ {product.price}</Card.Text>
                <AddButton textOnBtn={"Ver mas"} handleClick={showDetails} />
                <ItemCount stock={5} initial={1}/>
              
            </Card.Body>
                 
        </Card>
    )
 
}