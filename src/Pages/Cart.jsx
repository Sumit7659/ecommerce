import React from 'react'
import Layout from '../Layout/Layout'
import { useSelector } from 'react-redux'
import CartItems from '../Components/CartItems'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const nav = useNavigate();
  
  const tableStyle = {
    border:'1px solid black'
  }

  
  // const cartValue = JSON.parse(localStorage.getItem('cartValue'))
  const cartValue = useSelector
  console.log(cartValue);



  return (
    <Layout>
      <h2>Cart</h2>
      {cartValue.length !==0 ?
      <table style={tableStyle}>
      <tbody style={tableStyle}>
        <tr style={tableStyle}>
          <th style={tableStyle}>S No.</th>
          <th style={tableStyle}>Image</th>
          <th style={tableStyle}>Name</th>
          <th style={tableStyle}>Price</th>
        </tr>
        {cartValue.map((item,index) => {
          return (
            <CartItems cart={item} key={index} itemId={index} style={tableStyle} />
          )
        })}
      </tbody>
    </table>
    :
    <h2>Cart is Empty! Kindly visit <em onClick={()=>nav('/products')}>Products</em> Page</h2>}

    </Layout>
  )
}

export default Cart