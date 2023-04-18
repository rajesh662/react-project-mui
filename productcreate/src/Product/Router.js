import React, { useReducer } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Header from './Header/Header';
import Home from './Home/Home';
import Login from './Login/Login';
import Cart from './Buy-card/Cart';
import CreateProduct from './Create-Product/CreateProduct';
import FavProduct from './Fav-card/FavProduct';
import { stateContext } from './StateContext';
import CardDetails from './card-details/CardDetails';

import { initialState, stateReducer } from './Reducer';

const Router = () => {
  const [state,dispatch] = useReducer(stateReducer,initialState);
  return (
    <div>
      <stateContext.Provider value={{state,dispatch}}>
          <BrowserRouter>
         
          { state?.Logindata ?   
            <Routes>  
              <Route path='/Create' element={<CreateProduct/>}></Route> 
              <Route path='/Home' element={<Home/>}></Route>
              <Route path='/Fav' element={<FavProduct/>}></Route> 
              <Route path='/Cart' element={<Cart/>}></Route>  
              <Route path='/detail' element={<CardDetails/>}></Route>
       
            </Routes> :  <Routes>
              <Route path='/' element={<Login/>}></Route>
              <Route path='*' element={<Navigate to={'/'}></Navigate>}></Route> 
            </Routes>
        }
             
          </BrowserRouter>
        </stateContext.Provider>
    </div>
  )
}

export default Router
