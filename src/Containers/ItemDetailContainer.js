import React, { useEffect, useState } from "react";		
import ItemDetail from "../Components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


export default function ItemDetailContainer (){		

    const [product, setProduct ] = useState({})
   const {id} = useParams();

    useEffect (()=> {

        setTimeout(()=>{

            const promise = fetch ('https://fakestoreapi.com/products')
            promise
            .then(res => res.json())
            .then ( (res)=>{
                let selProduct = res.find(prod => prod.id == id)
                setProduct (selProduct)
            })
            .catch( (error) =>{
                console.log(error)
            })
        },2000)
    },[id])

    return(		

        <ItemDetail product={product} key={product.id}/>
        );
    	
}