import {createStore} from 'redux'
import { addToCart } from '../reducers/addToCartReducer'
export const ecommerce = createStore(addToCart) 