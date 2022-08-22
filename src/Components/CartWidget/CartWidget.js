import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

function CartWidget() {

    const { totalItems } = useContext(CartContext);
    
    return (
        <i className="bi bi-cart4">{totalItems}</i>
    )
}

export default CartWidget;