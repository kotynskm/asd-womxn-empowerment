import React from 'react';
import { ReactDOM } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material'
import img1 from '../../../public/assets/img1.jpg'
import img2 from '../../../public/assets/img2.jpg'

const InterestCarousel = () => {
   var items = [
     {
       name: 'Item 1',
       image: img1,
     },
     {
       name: 'Item 2',
       image: img2,

     },
   ];

   function Item(props) {
     return (
       <Paper>
         <h2>{props.item.name}</h2>
         <p>{props.item.description}</p>
         <img src={props.item.image}></img>
         <br></br>
         <a><button> Link </button></a>
         <a><button> Link </button></a>
         <a><button> Link </button></a>
         <a><button> Link </button></a>
         <br></br>
       </Paper>
     );
   }

   return (
     <>
       <div id="interestCarousel">
         <Carousel>
           {items.map((item, i) => (
             <Item key={i} item={item} />
           ))}
         </Carousel>
       </div>
     </>
   );
};

export default InterestCarousel;
