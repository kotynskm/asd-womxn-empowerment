import React from 'react';
import Tabs from './Tabs';
import './Tab.css' 
import {
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel, 
  FormLabel,
  Grow,
  InputLabel, Radio,
  RadioGroup,
  TextField,
  Typography,
  Paper
} from '@mui/material';
import RatingDropdownActivity from './RatingDropdown-Activity';
import { Container } from '@mui/system';

const ActivityRating = () => {
  
  // Get these from DB when ready
  const activities = [
    {
      type: 'Self-care', 
      title: 'Diaphragmatic Breathing',
      description: '"Belly breathing can help you use your diaphragm properly. Do belly breathing exercises when you’re feeling relaxed and rested. Practice diaphragmatic breathing for 5 to 10 minutes 3 to 4 times per day. When you begin you may feel tired, but over time the technique should become easier and should feel more natural."',
      howto: [
        'Lie on your back with your knees slightly bent and your head on a pillow.', 
        'Place one hand on your upper chest and one hand below your rib cage, allowing you to feel the movement of your diaphragm', 
        'Slowly inhale through your nose, feeling your stomach pressing into your hand.', 
        'Keep your other hand as still as possible.', 
        'Exhale using pursed lips as you tighten your stomach muscles, keeping your upper hand completely still.'
      ],
      citation: 'Cronkleton, E. (2019, April 9). 10 breathing exercises to try: For stress, training &amp; lung capacity. Healthline.', 
      link: 'https://www.healthline.com/health/breathing-exercise#belly-breathing'
    }, 
    {
      type: 'Community Building', 
      title: 'Host a Game Night',
      description: 'Bringing people together for a central activity is a wonderful way to build relationships. In addition, having a central and structured activity can help those with anxiety. There are in-person and virtual options for games nights. Choose whatever you are most comfortable with. Encourage others to dress up in some way for bonus points. Call up few close friends and get playing!',
      howto: [],
      citation: '', 
      link: ''
    }, 
    {
      type: 'Empowerment', 
      title: 'Be Vulnerable',
      description: 'Schedule a one-on-one conversation with someone you feel safe with. Tell them about a difficult experience you had recently. Reflect on what would help you the most. It can be a hug, kind words, encouraging thoughts, advice, or whatever you need. Advocate for what you need to your friend and enjoy the empowerment you feel when you ask for what you need from the people you love.',
      howto: [],
      citation: '', 
      link: ''
    }, 
    {
      type: 'Self-acceptance', 
      title: 'Pursue a Childhood Passion',
      description: 'Think back to when you were young. What were the activities and objects that you were most passionate about? Often, we give up on our childhood passions because we implicitly or explicitly hear that they are wrong or weird from peers and adults alike. When we get older, we tend to forget how much joy we can experience as humans if we follow our instincts and do the things we love regardless of perception. Pick your absolute favorite one and do! Right now!',
      howto: [],
      citation: '', 
      link: ''
    }, 
  ];

  function loadTabs(props) {
    const tabDiv = activities.map(
      function (activity) {
        const howTos = activity.howto.map((listItem) => <li key={listItem}>{listItem}</li>);
        var tabInfo = (
            <div label={activity.type}>
              <div id='activityInfoContainer' >
                <Paper style={{width: '50%', margin:'2em', padding:'1em', boxShadow: "2px 2px 13px",}}>
                  <h3 id='activityTitle'>{activity.title}</h3>
                  <p id='activityDescription'>{activity.description}</p>
                  <ol id='activityHowTo'>{howTos}</ol>
                  <a id = 'activityLink' href={activity.link}><cite id="activityCitation">{activity.citation}</cite></a>
                </Paper>
                {loadForm(activity.type)}
              </div>
            </div>)
        return tabInfo; 
      }
    );
    return tabDiv;  
  }

  function loadForm(props) {
    return (
      <Card
        variant="outline"
        elevation={3}
        // className="card-test-styling"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: "40%",
          boxShadow: "2px 2px 13px",
        }}
      >
        <FormControl>

          <form id={props}>
            <div>
              <h3 className="card-journal-head">How'd it go? Journal about it!</h3>
              <FormControlLabel control={<Checkbox />} label="Completed" />
              <RatingDropdownActivity />
              <div>
                <FormControl>
                  <Typography mt={2} mb={1}>
                    Did this activity positively contribute to your sense of
                    wellbeing?
                  </Typography>

                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </div>

              <br></br>
              <FormControl>
                {/* <Typography mt={2} mb={1}>
                  Activity Journal Entry
                </Typography> */}
                <TextField
                  id="outlined-basic"
                  label="Journal Entry"
                  variant="outlined"
                />
              </FormControl>
              <div style={{padding: "15px 0px", align:'center'}}>
                <ButtonGroup>
                  <Button variant="outlined" size="medium" type="submit">
                    Submit Activity
                  </Button>
                  <Button variant="outlined" size="medium" type="reset">
                    Reset Activity
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </form>
        </FormControl>
      </Card>
    );
  }

  return (
    <>
      <Tabs>
        {loadTabs()}
      </Tabs>
    </>
  );
};

export default ActivityRating;
