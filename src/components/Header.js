import React from 'react'

import { useSelector,useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { productSerch } from '../redux/productAction';

export const Header = () => {
    const result = useSelector((state)=>state.cartData);
    
    const dispatch = useDispatch();
   
  return (
    <div className='header'>
    
    
    <Link to="/">
    <h1 className='logo'>Ecomm-Cart</h1>
    </Link>
    <div className='search-box'>
    <input type="text" onChange={(event)=>dispatch(productSerch(event.target.value))} placeholder='Serch Product' />
    </div>
   
    <div className='cart-div'>
    <Link to="/cart">
    <span>{result.length}</span>
    <img src='https://cdn-icons-png.flaticon.com/512/263/263142.png' alt='' />
    </Link>
   
    </div>
    </div>
  )
}
