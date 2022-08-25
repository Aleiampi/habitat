import React, { useEffect, useState } from "react";		
import { useParams } from "react-router-dom";
import ItemList from "../Components/ItemList/ItemList";
import { db } from "../firebase";
import { collection, getDocs, query, where} from "firebase/firestore"


export default function ItemListContainer (){		

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const {category}= useParams();
    
    
    useEffect(() => {
      
      const collectionProd = collection(db,"products")
  
      if (category){
  
        const filter = where("category","==", category);
        const consulta = query(collectionProd,filter)
        const pedido = getDocs(consulta)
       
        
        pedido
            .then ((res)=>{
              const docs = res.docs
    
              const docsFormateado = docs.map(doc =>{
                const product = {
                  id : doc.id,
                  ...doc.data()
                }
                return product
      
              })
              console.log(docsFormateado);
              setProducts(docsFormateado);
              setLoading(false)
            })
      
            .catch((error)=>{
              console.log(error);
            })
      }else {
  
       
        // console.log(collectionProd);
        const pedido = getDocs(collectionProd)
        // console.log(pedido);
        // const filtro = where("category","==",category)
        // const consulta = query(collectionProd,filtro)
      
      
        
        pedido
            .then ((res)=>{
              const docs = res.docs
    
              const docsFormateado = docs.map(doc =>{
                const product = {
                  id : doc.id,
                  ...doc.data()
                }
                return product
      
              })
              console.log(docsFormateado);
              setProducts(docsFormateado);
              setLoading(false)
            })
      
            .catch((error)=>{
              console.log(error);
            })
  
  
      }
     
  }, [category])
  
  
     return ( 
  
      <div>
             {loading && "Loading..."}
             <ItemList products={products} />
       </div>
     );



    // console.log(db);  //funciona!!

    // const [products, setProducts ] = useState([])
    // const { category } = useParams();

    // useEffect (()=> {

    //     const collectionProd = collection(db,"products")
    //     console.log(collectionProd)
    //     const request = getDocs(collectionProd)

    //     request
    //         .then((res)=>{
                
    //         })

    //     if (category === undefined ){

    //         setTimeout(()=>{

    //             const promise = fetch ('https://fakestoreapi.com/products')
    //             promise
    //             .then(res => res.json())
    //             .then( (products) => {
    //                 setProducts(products)
    //             })
    //             .catch( (error) =>{
    //                 console.log(error)
    //             })
    //         },2000)

    //     }else{

    //         setTimeout (()=>{

    //             const promise = fetch ('https://fakestoreapi.com/products')
    //             promise
    //             .then(res => res.json())
    //             .then( (products)=>{
    //                 let prodInCategory = products.filter (products => products.category === category)
    //                 setProducts(prodInCategory)
    //             })
    //             .catch((error)=>{
    //                 console.log(error)
    //             })

    //         },)


    //     }
       
    // },[category])

    // return(		
    //     <>
   
    //     <ItemList products={products} />
    //     </>
    // )		
}