import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";


function CartWidget() {

    const { totalItems } = useContext(CartContext);


    const navigateToHome = useNavigate();
    const toHome = ()=>{
        navigateToHome(`/cart`)
    }
    
    return (
        <Button  onClick={toHome}> <i className="bi bi-cart4">{totalItems}</i></Button>
    )
}

export default CartWidget;