import React from 'react';
import { ReactDOM } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Grid, Item } from '@mui/material'
import asan from '../../../public/assets/ASAN-logo.png'
import awn from '../../../public/assets/AWN-Logo.png';
import unmasking from '../../../public/assets/Unmasking.jpg'
import intersections from '../../../public/assets/Intersections.png';


const ResourceCarousel = () => {
   var items = [
     {
       name: 'Autistic Self Advocacy Network',
       description: 'The Autistic Self Advocacy Network seeks to advance the principles of the disability rights movement with regard to autism. ASAN believes that the goal of autism advocacy should be a world in which autistic people enjoy equal access, rights, and opportunities. We work to empower autistic people across the world to take control of our own lives and the future of our common community, and seek to organize the autistic community to ensure our voices are heard in the national conversation about us. Nothing About Us, Without Us!',
       image: asan,
       link: 'https://autisticadvocacy.org/'
     },
     {
       name: 'Unmasking Autism: Discovering the New Faces of Neurodiversity, by Dr. Devon Price',
       description: 'A deep dive into the spectrum of Autistic experience and the phenomenon of masked Autism, giving individuals the tools to safely uncover their true selves while broadening society’s narrow understanding of neurodiversity.',
       image: unmasking,
       link: 'https://www.amazon.com/Unmasking-Autism-Discovering-Faces-Neurodiversity/dp/B09BBM2WQJ/'
     },
     {
      name: 'Autistic Women & Nonbinary Network',
      description: 'The mission of Autistic Women & Nonbinary Network (AWN) is to provide community support, and resources for Autistic women, girls, transfeminine and transmasculine nonbinary people, trans people of all genders, Two Spirit people, and all people of marginalized genders or of no gender. AWN is committed to recognizing and celebrating diversity and the many intersectional experiences in our community.',
      image: awn,
      link: 'https://awnnetwork.org/'
    },
    {
      name: 'The Intersections of Race and Autism',
      description: 'I am a Black, queer, disabled, and non-binary individual. This is quite an interesting intersection to live at and one that I feel is important to discuss. I have multiple disabilities, autism being one of them. I am often asked to speak on disability since I am a disabled scientist, as well as a disabled activist. Within this article, I plan to expand on the topic of race and autism from both points of view by delivering data and statistics, as well as discussing the societal factors and experiences that impact those of us living at this unique intersection.I will focus on diagnostic disparities as a way of inviting readers to broader conversations on intersections of disability and race.',
      image: intersections,
      link: 'https://awnnetwork.org/the-intersections-of-race-and-autism-diagnostic-disparities-and-marginalized-existence/'
    },
   ];

   function Item(props) {
     return (
      <div style={{margin:'0em 4em'}}>
        <Paper elevation={3} style={{padding:'2em', height:'18em'}}>
          <Grid container spacing={2} columns={16}>
            <Grid xs={1}></Grid>
            <Grid xs={5}>
                <div style={{height:"300px", alignItems:"center", display:"flex", justifyContent:"center"}}>
                  <img style={{maxWidth:"100%", maxHeight:"100%"}} src={props.item.image}></img>
                </div>
            </Grid>
            <Grid xs={1}></Grid>
            <Grid xs={8}>
                <h2>{props.item.name}</h2>
                <p><cite>"{props.item.description}"</cite></p>
                <Button variant="contained" className="CheckButton" href={props.item.link}>Check it out!</Button>
            </Grid>
            <Grid xs={1}></Grid>
          </Grid>
        </Paper>
        </div>
     );
   }

   return (
     <>
       <div id="resourceCarousel">
         <Carousel>
           {items.map((item, i) => (
             <Item key={i} item={item} />
           ))}
         </Carousel>
       </div>
     </>
   );
};

export default ResourceCarousel;
