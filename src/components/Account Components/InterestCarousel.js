import React from 'react';
import { ReactDOM } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material'
import Dinosaur from '../../../public/assets/Dinosaur.jpg'
import FancyRate from '../../../public/assets/FancyRate.jpg'
import Telescope from '../../../public/assets/Telescope.jpg'
import WonderWoman from '../../../public/assets/WonderWoman.jpg'

const InterestCarousel = () => {
   var items = [
     {
       name: 'James Webb Telescope',
       image: Telescope,
       link1: 'https://webb.nasa.gov/content/about/faqs/facts.html',
       link2: 'https://webbtelescope.org/',
       link3: 'https://en.wikipedia.org/wiki/James_Webb_Space_Telescope',
       link4: 'https://twitter.com/NASAWebb'
     },
     {
       name: 'Fancy rats',
       image: FancyRate,
       link1: 'https://onekindplanet.org/animal/rat/',
       link2: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8214441/',
       link3: 'https://animalia.bio/fancy-rat',
       link4: 'https://www.nfrs.org/'
     },
     {
      name: 'Paleontology',
      image: Dinosaur,
      link1: 'https://www.britannica.com/science/paleontology',
      link2: 'https://ucmp.berkeley.edu/paleo/paleowhat.html',
      link3: 'https://www.fs.usda.gov/science-technology/geology/paleontology',
      link4: 'https://www.sciencenews.org/topic/paleontology'
    },
    {
      name: 'Wonder Woman',
      image: WonderWoman,
      link1: 'https://en.wikipedia.org/wiki/Wonder_Woman',
      link2: 'https://www.imdb.com/title/tt0451279/',
      link3: 'https://www.dc.com/characters/wonder-woman',
      link4: 'https://dc.fandom.com/wiki/Wonder_Woman_(Diana_Prince)'
    },
   ];

   function Item(props) {
     return (
       <Paper>
         <h2>{props.item.name}</h2>
         <p>{props.item.description}</p>
         <img src={props.item.image}></img>
         <br></br>
         <h3>Learn more</h3>
         <a target="_blank" href={props.item.link1}><button>link1</button></a>
         <a target="_blank" href= {props.item.link2}><button>link2</button></a>
         <a target="_blank" href={props.item.link3}><button>link3</button></a>
         <a target="_blank" href={props.item.link4}><button>link4</button></a>
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
