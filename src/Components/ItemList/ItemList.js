import { Container } from "react-bootstrap";
import Item from "../Item/Item";
import './ItemList.css'


export default function ItemList ({products}) {
    
    // console.log( products)
    return(
        <Container className="itemList-container">
            {
                products.map( (product) =>{
                    return <Item product ={product} key={product.id} />
                })
            }
        </Container>
    )
}