import React from 'react'
import { addtoCartAction } from '../redux/actions/cartActions'
import { useDispatch } from 'react-redux'

const ProductCart = ({product}) => {
  const {id,img,name,price}=product 
  const dispatch = useDispatch()
    return (
    <div style={{width:'250px',height:'300px',border:'2px solid black',display:'inline-block',backgroundColor:'black',color:'white',marginLeft:'5px',marginTop:'5px',textAlign:'center',paddingTop:'15px'}}>

      <img src={img} alt="Car" width='150px' height='150px'/> <br />
        <h4>{name}</h4>
        <p>{price}</p>
        <hr />
        <button onClick={()=>dispatch(addtoCartAction(id))}>Add to Cart</button>
    </div>
  )
}

export default ProductCart
