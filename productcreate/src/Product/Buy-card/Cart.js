import * as React from 'react';
import { useContext,useState } from 'react';
import { stateContext } from '../StateContext'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import './Cart.scss'
import Image1 from '../Image/Product.jpg';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Stack, TextField } from '@mui/material';
import Header from '../Header/Header';

const Cart = () => {
    const[state,setState]=useState(1);
    const {state:{task,count},dispatch}=useContext(stateContext);
    const countFun = ()=>{
        let a = {}
        for(let i = 0;i< count.length;i++){
            a[count[i].id]=1
        }
        return a;
    }
const [func,setFunc]=useState(countFun);
console.log(func);
    const getFav=(e)=>{
        dispatch({type:"FAV",payload:{
        id:e.id,
        isFav:e.isFav
        }
    })
      }

      const getCart=(e)=>{
        dispatch({type:"CART",payload:{
        id:e.id,
        isCart:e.isCart
        }
    })
      }

     

    const RemoveQuantity=(id)=>{
        if(func[id] > 0){
            setFunc(prevCount => ({...prevCount,[id] : prevCount[id]-1}))
        }
    }

    const AddQuantity=(id,stack)=>{
        
        if(func[id] < stack){
            setFunc(prevCount => ({...prevCount,[id] : prevCount[id]+1}))
        }    
        
    }

    return (
        <section id='buy-section'>
           <Header></Header>
            <h1 className='card-h'>BUY CARD</h1>
          <div className='container'>
            <div className='row'>
                
                {count?.filter(e => e.isCart === true)?.map((value,i)=>{ 
                    return<>
                    <div className='col-4'>
                    
                    <Card sx={{ maxWidth: 500 }} key={i} className='buy-card'>
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://i0.wp.com/gurgaonbakers.com/wp-content/uploads/2020/11/large-chocolaty-birthday-cake.jpg"
                            alt="Paella dish"
                        />
                        <CardContent className='product-content'>
                            <Typography variant="body2" color="text.secondary" className='puy-name'>
                            {value.Name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className='puy-description'>
                            {value.Description}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className='puy-price'>
                            <CurrencyRupeeIcon className='price-icon'/>{value.Price}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className='puy-stock'>
                            Stock:{value.Stock}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                 <Checkbox checked={value.isFav} color='error'  onClick={()=>getFav(value)} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                            </IconButton>
                            
                            <IconButton aria-label="share">
                            <Checkbox checked={value.isCart} onClick={()=>getCart(value)} icon={ <ShoppingCartIcon />} checkedIcon={<ShoppingCartIcon />} />
                            </IconButton>
                            <RemoveCircleIcon onClick={()=>RemoveQuantity(value.id)}/>
                            <TextField className='count-box' id="outlined-basic" label="quantity" variant="outlined" value={func[value.id] > 0 ? func[value.id] : dispatch({type:"REMOVE",payload:value})}/>
                            <AddCircleIcon onClick={()=>AddQuantity(value.id,value.Stock)}/>
                        </CardActions>
                    </Card>
                    </div>
                    </>
                    }
                )}    
            </div>
          
          </div>
        </section>
      )
    }

export default Cart
