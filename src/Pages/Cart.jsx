import React from 'react'
import Layout from '../Layout/Layout'
import {useSelector} from 'react-redux'
import CartItems from '../Components/CartItems'

const Cart = () => {
  const cartValue = useSelector(state=>state)
  const tableStyle={
    boarder:'2px solid black'
  }
  return (
    <Layout>
      <h2>Cart</h2>
      {cartValue.length!==0?
            <table style={tableStyle}>
            <tbody style={tableStyle}>
              <tr style={tableStyle}>
                <th>S No.</th>
                <th>Images</th>
                <th>Name</th>
                <th>Price</th>
              </tr>
              {cartValue.map((item,index)=>{
              return(
                <CartItems cart={item} key={index} itemId={index}/>
              )
            })}
            </tbody>
          </table>
          :'Cart is Empty kindly visit product list'}
    </Layout>
  )
}

export default Cart
