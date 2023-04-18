import * as React from 'react';
import { useContext } from 'react';
import { stateContext } from '../StateContext';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import './Home.scss'
 
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const nava = useNavigate();

    const {state:{task,fav, search},dispatch}=useContext(stateContext);
  console.log(task);
  console.log(fav);
  console.log(search);

  const getFav=(e)=>{
    dispatch({type:"FAV",payload:{
    id:e.id,
    isFav:e.isFav
    }})
  }

  const getCart=(e)=>{
    dispatch({type:"CART",payload:{
    id:e.id,
    isCart:e.isCart
    }
})
  }
  const getDetails=(rk)=>{
    dispatch({type:"CARDDETAILS",
    payload:task,
  })
  nava('/detail')
  }



  return (
    <div id='home-section'>
      <Header></Header>
        <h1 className='home-h'>HOME</h1>
      <div className='container'>
        <div className='row'>
      
            {task.map((value,i)=>{   
                return<>
                <div className='col-4'>
                <Card sx={{ maxWidth: 345 }} key={i} className='home-card' >
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://i0.wp.com/gurgaonbakers.com/wp-content/uploads/2020/11/large-chocolaty-birthday-cake.jpg"
                        alt="Paella dish"
                        onClick={()=>getDetails(value)}
                    />
                    <CardContent className='product-content' onClick={()=>getDetails(value)}>
                        <Typography variant="body2" color="text.secondary" className='h-name'>
                        {value.Name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='h-description'>
                        {value.Description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='h-price'>
                        <CurrencyRupeeIcon className='price-icon'/>{value.Price} 
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='h-stock'>
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

export default Home
