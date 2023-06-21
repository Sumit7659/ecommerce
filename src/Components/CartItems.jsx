import React from 'react'

const CartItems = ({cart,itemId,style}) => {
  const {img,name,price}=cart
  return (
    <tr style={style}>
      <td style={style}>{itemId+1}</td>
      <td style={style}><img src={img}  /></td>
      <td style={style}>{name}</td>
      <td style={style}>{price}</td>
      <td style={style}><button>X</button></td>
    </tr>
  )
}

export default CartItems
