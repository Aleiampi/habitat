// import { Alert } from "bootstrap";
import React, { useEffect, useState } from "react";		
// import Container from "react-bootstrap/esm/Container";
import Alert from "react-bootstrap/esm/Alert";
import ItemList from "../Components/ItemList/ItemList";


export default function ItemListContainer (){		

    const [products, setProducts ] = useState([])

    // const getData = () => {
    //     fetch ('https://api.escuelajs.co/api/v1/products?offset=0&limit=20')
    //     .then(res => res.json())
    //     .then( (products) => {
    //         setProducts(products)
    //         console.log(products)
    //     })
    //     .catch( (error) =>{
    //         console.log(error)
    //     })
    // }

    useEffect (()=> {
        // getData()
        setTimeout(()=>{

            // const promise = fetch ('https://api.escuelajs.co/api/v1/products?offset=0&limit=20')
            // const promise = fetch ('http://localhost:3000/productList.json')
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