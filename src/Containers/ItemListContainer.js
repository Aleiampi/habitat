// import { Alert } from "bootstrap";
import React, { useEffect, useState } from "react";		
// import Container from "react-bootstrap/esm/Container";
import Alert from "react-bootstrap/esm/Alert";
import ItemList from "../Components/ItemList/ItemList";


export default function ItemListContainer (){		

    const [products, setProducts ] = useState([])


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
        <>
   
        <ItemList products={products} />
        </>
    )		
}