import { useState } from "react";
// import AddButton from "../Button/Button";
import { Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import './ItemCount.css'

const ItemCount = ({stock, initial}) => {

    const [quantity, setQuantity ] = useState (initial);

    const clickPlus = () => {
        if ( quantity < stock ){
            setQuantity (quantity + 1)
        }
    }

    const clickMinus = () => {
        if (quantity > 1 ){
            setQuantity (quantity - 1 )
        }
    }

    // const navigateToCart = useNavigate();
    // const onAdd = () => {
    //     // navigateToCart(`/cart`)
    //     console.log("click")

    // }

    return (

        <div className="itemCount">
             <h5> cantidad : {quantity} </h5>

             <div className="minusPlus">
                <Button variant="outline-success" onClick={clickPlus} > + </Button>
                <Button variant="outline-danger" onClick={clickMinus} > - </Button>
            </div>
             
            {/* <AddButton textOnBtn={"Agregar"} handleClick={onAdd} /> */}
        </div>

    )

}

export default ItemCount;