import React, { useContext, useState } from 'react';
import { Button,TextField } from '@mui/material';
import { stateContext } from '../StateContext';
import './CreateProduct.scss';
import EditIcon from '@mui/icons-material/Edit';
import Header from '../Header/Header';


let a = [];
const CreateProduct = () => {
    const {state,dispatch}=useContext(stateContext);
    console.log(state);
    const [ProductName,setName]=useState(" ");
    const [Description,setDescription]=useState(" ");
    const [Price,setPrice]=useState(" ");
    const [Stock,setStock]=useState(" ");
    const [formSub,setFormsub]=useState(false)

    const ProductNameInput=(e)=>{
        setName(e.target.value);
    }

    const DescriptionInput=(e)=>{
        setDescription(e.target.value);
    }

    const PriceInput=(e)=>{
        setPrice(e.target.value);
    }

    const StockInput=(e)=>{
        setStock(e.target.value);
    }

    const CreateId=()=>{
        return Math.floor(Math.random()*100000);
    }

    const submiting=(e)=>{
        e.preventDefault();
        setName('');
        setDescription('');
        setPrice('');
        setStock('');
        
        setFormsub('true')
          const rk={
            isFav:false,
            id:CreateId(),
            Name:ProductName, 
            Description:Description,
             Price:Price,
             Stock:Stock
            }
            a.push(rk);    
            console.log(a);
      }

  return (
    <section id='create-product'>
      <Header></Header>
        <h1 className='create-h'>ADD CARDS</h1>
      <div className='container'>
        <div className='row'>
        <form className='create-form' onSubmit={submiting}>
            <div className='row'>
                <div className='col-6'>
            <TextField 
                id="Filled-basic" 
                label="ProductName"
                margin="normal"
                variant="outlined"
                className='product-input'
                type={'text'}
                value={ProductName}
                onChange={ProductNameInput}
            />
            </div>
            <div className='col-6'>
            <TextField
                id="Filled-basic"
                label="Description"
                margin="normal"
                variant="outlined"
                className='product-input'
                type={'text'}
                value={Description}
                onChange={DescriptionInput}
            />
            </div>
            <div className='col-6'>
            <TextField
                id="Filled-basic"
                label="price"
                margin="normal"
                variant="outlined"
                className='product-input'
                type={'text'}
                value={Price}
                onChange={PriceInput}
            />
            </div>
            <div className='col-6'>
            <TextField
                id="Filled-basic"
                label="stock"
                margin="normal"
                variant="outlined"
                className='product-input'
                type={'text'}
                value={Stock}
                onChange={StockInput}
            />
            </div>
            <div className='col-12 btn-cen'>
            <Button variant="contained" onClick={()=>dispatch({type:"PUSH",payload:a})} type={'submit'}>Create</Button>
            </div>
            </div>
        </form>
      </div>
      </div>
    </section>
  )
}

export default CreateProduct
