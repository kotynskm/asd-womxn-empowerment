import React from 'react';
import {Paper} from '@mui/material'

const About = () => {
  return (
  <>
  <div id='about'>
    <Paper elevation={3} style={{width:'30%', marginTop:'4em', marginLeft:'auto', marginRight:'auto', padding: '2em'}}>
      <h2>About Us</h2>
      <p>Our mission was to create an app that provides community, free expression, acceptance, and self-care to neurodiverse womxn. The ASD Womxn Empowerment App was created for the GirlDevelopIt Virtual Hackathon 2022.</p>
    </Paper>

  </div>
  </>
  );
};

export default About;
