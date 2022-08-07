// import { Alert } from "bootstrap";
import React, { useEffect, useState } from "react";		
// import Container from "react-bootstrap/esm/Container";
import Alert from "react-bootstrap/esm/Alert";
import ItemDetail from "../Components/ItemDetail.js/ItemDetail";



export default function ItemDetailContainer (){		

    const [products, setProducts ] = useState([])
    // const [product, setProduct] = useState ([])

    useEffect (()=> {

        setTimeout(()=>{

            const promise = fetch ('https://fakestoreapi.com/products')
            promise
            .then(res => res.json())
            .then( (products) => {
                setProducts(products)
                console.log(products)
            })
            .catch( (error) =>{
                console.log(error)
            })
        },2000)
    },[])

    return(		


        <div>
        {products.filter(prod => prod.id === 2).map(product => (
            <ItemDetail product={product} />
        ))}
        </div>
        );
    	
}