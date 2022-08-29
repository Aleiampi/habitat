import React, { useEffect, useState } from "react";		
import ItemDetail from "../Components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDoc, doc } from "firebase/firestore"

export default function ItemDetailContainer (){		

    const [loading, setLoading] = useState(true)
    const [product, setProduct ] = useState({})
    const {id} = useParams();

   
    useEffect(()=>{

        const collectionProd = collection(db,"products");
        const docRef = doc(collectionProd, id)
        const pedido = getDoc(docRef)
      
        pedido
        .then((resultado)=>{
          // console.log(resultado.id);
          // console.log(resultado.data());
          const product = resultado.data()
          setProduct({...product,id})
          setLoading(false)
        })
        .catch((error)=>{
          console.log(error);
        })
           
      },[id])
   

    return(		
        <>
            {loading && "Loading..."}
            <ItemDetail product={product} key={product.id}/>
        </>
        );
    	
}