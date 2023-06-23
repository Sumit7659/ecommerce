import React from 'react'
import Layout from '../Layout/Layout'
import { products } from '../Data/Data'
import ProductCart from '../Components/ProductCart'

const Product = () => {
  return (
    <Layout>
      <h2>Products</h2>
      {products.map((item,index)=>{
        return(
          <ProductCart product={item} key={index} />
        )
      })}

    </Layout>
  )
}

export default Product