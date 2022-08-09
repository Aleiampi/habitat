// import { Alert } from "bootstrap";
import React, { useEffect, useState } from "react";		
// import Container from "react-bootstrap/esm/Container";
// import Alert from "react-bootstrap/esm/Alert";
import ItemDetail from "../Components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";



export default function ItemDetailContainer (){		

    const [product, setProduct ] = useState({})
   const {id} = useParams();
   console.log(id)

    useEffect (()=> {



        setTimeout(()=>{

            const promise = fetch ('https://fakestoreapi.com/products')
            promise
            .then(res => res.json())
            // .then( (product) => {
            //     setProducts(products)
            //     console.log(products)
            // })
            .then ( (res)=>{
                let selProduct = res.find(prod => prod.id == id)
                setProduct (selProduct)
                console.log("selProdu = " + selProduct)
                console.log("product =" + product)
            })
            .catch( (error) =>{
                console.log(error)
            })
        },2000)
    },[id])

    return(		


        // <div>
        // {/* {products.filter(prod => prod.id == 2).map(product => (
        //     <ItemDetail product={product} key={product.id}/>
        // ))} */}
        // </div>
        <ItemDetail product={product} key={product.id}/>
        );
    	
}