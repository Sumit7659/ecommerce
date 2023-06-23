import {products} from '../../Data/Data'

export const addtoCartAction=(id)=>{
    let targetItem=products.filter(product=>product.id===id)
    console.log(targetItem)
    return {type:'ADD',payload:targetItem[0]}
}
export const removeFromCartAction=(id)=>{
    let cartData=localStorage.getItem('cartValue')
    if(cartData!==null){
        cartData=JSON.parse(cartData)
        let updatedCartData = cartData.filter(items=>items.id !==id)
        return {type:'REMOVE',payload:updatedCartData}
    }
}