"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

interface Product {
  id: number,
  name: string,
  image: string
}

export default function Home() {
  const [products, setProducts] = useState<[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('localhost:5001/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);
  
  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <h1>Homepage</h1>
      </div>

      <div className={styles.productList}>
        <ul>
          {products.map((product: Product) =>(
            <li>
              {product.name}
              <img src={product.image} alt={product.name}/>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
