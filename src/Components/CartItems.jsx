import React from 'react'
import { useDispatch } from 'react-redux';
import { removeFromCartAction } from '../redux/actions/cartActions';

const CartItems = ({cart, itemId, style}) => {
  const{id,img,name,price} = cart;
  const dispatch=useDispatch()

  return (
    <tr style={style}>
      <td style={style}>{itemId+1}</td>
      <td style={style}><img src={img} width='100px' height='100px' alt=' '/></td>
      <td style={style}>{name}</td>
      <td style={style}>{price}</td>
      <td style={style}><button onClick={()=>dispatch(removeFromCartAction(id))}>x</button></td>
    </tr>
  )
}

export default CartItems