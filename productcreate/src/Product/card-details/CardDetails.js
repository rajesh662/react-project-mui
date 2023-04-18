import React, { useContext, useState } from 'react'
import Header from '../Header/Header';
import { stateContext } from '../StateContext';
import StarIcon from '@mui/icons-material/Star';
import './details.scss';



const CardDetails = () => {

    const {state:{task},dispatch}=useContext(stateContext);

    const[detail,detailFun]=useState(task);

    console.log(task);

  return (
    <section id='details-section'>
        <Header></Header>
        <h1 className='detail-head'>PRODUCT-DETAILS</h1>
        <div className='container'>
            <div className='row'>
            
                        {detail.map((rk)=>{
                            return<>
                            
    <div className='col-6'>
        <div>
        <img src='https://i0.wp.com/gurgaonbakers.com/wp-content/uploads/2020/11/large-chocolaty-birthday-cake.jpg' width='100%'></img>    
        </div>               
    </div>
    <div className='col-6'>
        <div className='detcont'>
        <h1 className='details-name'>{rk.Name}</h1>
        <p className='details-cont'>{rk.Description}</p>
        <StarIcon className='star-icon'></StarIcon>
        <StarIcon className='star-icon'></StarIcon>
        <StarIcon className='star-icon'></StarIcon>
        <StarIcon className='star-icon'></StarIcon>
        <StarIcon className='star-icon'></StarIcon>

        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>
        <div className='row cut-img'>
            <div className='col-3'>
                <div className='details-img'>
                            <img src='https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_26/1453666/cake-cutting-cake-today-main-1906627.jpg' width='100%'></img>
                </div>
            </div>
            <div className='col-3'>
                <div className='details-img'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy9g3xwjSGPixwHKgqHtPiBbVFgaesjX-8VKJGsxVH&s' width='100%'></img>
                </div>
            </div>
            <div className='col-3'>
                <div className='details-img'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ82xEMzmKSI4QwqrZ-5ie91XXKElU2D6VHzVLMJ224&s' width='100%'></img>
                </div>
            </div>
            <div className='col-3'>
                <div className='details-img'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcn4Le6H4LBNB1vX_zDwPJdqOIBF94YuvJwkpMTjhK&s' width='100%'></img>
                </div>
            </div>
            <div className='col-3'>
                <div className='details-img'>
                            <img src='https://www.kingarthurbaking.com/sites/default/files/blog-images/2019/05/The-best-way-to-cut-cake-13-1.jpg' width='100%'></img>
                </div>
            </div>
        </div>
    </div>
  
                            </>
                            
                        })}
                
            </div>
        </div>
    </section>
  )
}

export default CardDetails;
