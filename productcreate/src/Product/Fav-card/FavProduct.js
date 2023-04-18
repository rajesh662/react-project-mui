import React from 'react'
import { useContext } from 'react';
import { stateContext } from '../StateContext'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import './FavProduct.scss'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Header from '../Header/Header';

const FavProduct = () => {
    const {state:{task,fav},dispatch}=useContext(stateContext);

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

    return (
        <div id='fav-section'>
            <Header></Header>
            <h1 className='fav-h'>FAVORITE</h1>
          <div className='container'>
            <div className='row'>
               
                {task?.filter(e => e.isFav === true)?.map((value,i)=>{ 
                    return<>
                    <div className='col-4'>
                    <Card sx={{ maxWidth: 345 }} key={i} className='home-card'>
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://i0.wp.com/gurgaonbakers.com/wp-content/uploads/2020/11/large-chocolaty-birthday-cake.jpg"
                            alt="Paella dish"
                        />
                        <CardContent className='product-content'>
                            <Typography variant="body2" color="text.secondary" className='f-name'>
                            {value.Name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className='f-description'>
                            {value.Description}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className='product-price'>
                            <CurrencyRupeeIcon className='price-icon'/>{value.Price}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className='f-stock'>
                            Stock:{value.Stock}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                 <Checkbox checked={value.isFav} color='error' onClick={()=>getFav(value)} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                            </IconButton>
                            {/* <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton> */}
                            <IconButton aria-label="share">
                            <Checkbox checked={value.isCart} onClick={()=>getCart(value)} icon={ <ShoppingCartIcon />} checkedIcon={<ShoppingCartIcon />} />
                            </IconButton>
                        </CardActions>
                    </Card>
                    </div>
                    </>
                    }
                )}    
            
            </div>
          </div>
        </div>
      )
    }

export default FavProduct;
