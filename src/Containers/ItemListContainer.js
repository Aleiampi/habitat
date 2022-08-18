import React, { useEffect, useState } from "react";		
import { useParams } from "react-router-dom";
import ItemList from "../Components/ItemList/ItemList";


export default function ItemListContainer (){		

    const [products, setProducts ] = useState([])
    const { category } = useParams();

    useEffect (()=> {

        if (category === undefined ){

            setTimeout(()=>{

                const promise = fetch ('https://fakestoreapi.com/products')
                promise
                .then(res => res.json())
                .then( (products) => {
                    setProducts(products)
                })
                .catch( (error) =>{
                    console.log(error)
                })
            },2000)

        }else{

            setTimeout (()=>{

                const promise = fetch ('https://fakestoreapi.com/products')
                promise
                .then(res => res.json())
                .then( (products)=>{
                    let prodInCategory = products.filter (products => products.category === category)
                    setProducts(prodInCategory)
                })
                .catch((error)=>{
                    console.log(error)
                })

            },)


        }
       
    },[category])

    return(		
        <>
   
        <ItemList products={products} />
        </>
    )		
}