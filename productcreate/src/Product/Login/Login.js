import { Button, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { stateContext } from '../StateContext';



const Login = () => {

  const {state,dispatch}= useContext(stateContext);

  const nava = useNavigate();
  const [inputText,funText]=useState("");
  const [inputPass,funPass]=useState("");
  const [requred,funRequred]=useState(false);

  const notify = ()=>{
    if(inputText === '' || inputPass === ''){
toast("filed is empty")
    }
    else{
    toast("currect email and password!");
    }
  }

  const logInput = (rk)=>{

    if(rk.target.name === 'name'){
      funText(rk.target.value);
    }
    else{
      funPass(rk.target.value);
    }
  }


  const logSubmit = (rk)=>{
  rk.preventDefault();
funRequred(true);
// {dispatch({type:"TRUE",payload:true})}

const users = [
  {
    name:"rajesh",
    password:"12345",
  },
  {
    name:"mukela",
    password:"12345",
  },
]
let check = users.find((rk)=>rk.name === inputText && rk.password === inputPass )
if(check){ 
  {dispatch({type:"TRUE",payload:true})}
nava('/Create');


}

}

  
  return (
    <section className='form-section'>
      <div className='container'> 
        <div className='row'>
          <div className='form-center'>
            <form className='form' onSubmit={logSubmit}>
 
              <h1>LOGIN</h1>
              <div className='row'>
                <div className='form-text'>
                <TextField label='EMAIL' type='text' name='name' onChange={logInput}value={inputText}></TextField>
                {inputText === '' && requred && <p>email id pls</p>}
                </div>
                <div className='form-text'>
                <TextField label='PASSWORD' type='password' name='pass' onChange={logInput} value={inputPass}></TextField>
                {inputPass === '' && requred && <p>password id pls</p>}

                </div>
                <div className='form-text'>
                  {/* <TextField type='submit'></TextField> */}
                 <Button type='submit'onClick={notify} className='submit' >submit</Button>
                 <ToastContainer />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
// onClick={notify}