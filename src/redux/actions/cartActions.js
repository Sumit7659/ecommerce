import {products} from '../../Data/Data'

export const addtoCartAction=(id)=>{
    let targetItem=products.filter(product=>product.id==id)
    console.log(targetItem)
    return {type:'ADD',payload:targetItem[0]}
}