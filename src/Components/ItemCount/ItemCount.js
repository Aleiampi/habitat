import { useState } from "react";
import AddButton from "../Button/Button";
import { Button } from "react-bootstrap";
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

    const onAdd = () => {
        if (stock === 0 ){
            alert("no hay stock =(")
        }else{
            alert("se agregaron "+ quantity)
            setQuantity (initial)
        }
    }

    return (

        <div className="itemCount">
             <h2> cantidad : {quantity} </h2>

             <div className="minusPlus">
                <Button variant="outline-success" onClick={clickPlus} > + </Button>
                <Button variant="outline-danger" onClick={clickMinus} > - </Button>
            </div>
             
            <AddButton textOnBtn={"Agregar"} handleClick={onAdd} />
        </div>

    )

}

export default ItemCount;