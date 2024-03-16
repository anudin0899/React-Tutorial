import React from 'react'
import Header from '../../Components/Header/Header';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';

const ProductDetail = () => {
  const { id } = useParams();


  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();

    if (data) {
      setProduct(data)
    }
  };
  
  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <div className='page'>
      <Header />
      <div className='section'>
        <Breadcrumb />
        <div className='sectionDiv'>
          {product ? (
            <div className='productCard'>
              <img src={product?.thumbnail} alt={product.title} />
              <h2>{product.title}</h2>
              <h3>${product.price}</h3>
              <h4>{product.category}</h4>
            </div>
          ) : (
            <p>Loading ... </p>
          )}
        </div>
      </div>

    </div>
  )
}

export default ProductDetail