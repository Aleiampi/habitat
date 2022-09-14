import { useState } from "react";
import AddButton from "../Button/Button";
import { Button } from "react-bootstrap";
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {

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

    const confirmarCantidad =()=>{
        console.log(`confirmar: ${quantity}`)
        onAdd(quantity)
    }

    return (

        <div className="itemCount">
             <h5> cantidad : {quantity} </h5>

             <div className="minusPlus">
                <Button variant="outline-success" onClick={clickPlus} > + </Button>
                <Button variant="outline-danger" onClick={clickMinus} > - </Button>
            </div>
             
            <AddButton textOnBtn={"Agregar"} handleClick={confirmarCantidad} />
        </div>

    )

}

export default ItemCount;