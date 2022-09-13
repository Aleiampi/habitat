import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../Components/ItemList/ItemList";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const collectionProd = collection(db, "products");

    if (category) {
      const filter = where("category", "==", category);
      const consulta = query(collectionProd, filter);
      const pedido = getDocs(consulta);

      pedido
        .then((res) => {
          const docs = res.docs;

          const docsFormateado = docs.map((doc) => {
            const product = {
              id: doc.id,
              ...doc.data(),
            };
            return product;
          });
          console.log(docsFormateado);
          setProducts(docsFormateado);
          setLoading(false);
        })

        .catch((error) => {
          console.log(error);
        });
    } else {
      const pedido = getDocs(collectionProd);

      pedido
        .then((res) => {
          const docs = res.docs;

          const docsFormateado = docs.map((doc) => {
            const product = {
              id: doc.id,
              ...doc.data(),
            };
            return product;
          });
          console.log(docsFormateado);
          setProducts(docsFormateado);
          setLoading(false);
        })

        .catch((error) => {
          console.log(error);
        });
    }
  }, [category]);

  return (
    <div>
      {loading && "Loading..."}
      <ItemList products={products} />
    </div>
  );
}
