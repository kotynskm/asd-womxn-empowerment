import React from 'react';
import Tabs from './Tabs';
import './Tab.css' 

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
        const howTos = activity.howto.map((listItem) => <li>{listItem}</li>);
        var tabInfo = (
          <div label={activity.type}>
            <div id='activityInfoContainer' >
              <h3 id='activityTitle'>{activity.title}</h3>
              <p id='activityDescription'>{activity.description}</p>
              <ol id='activityHowTo'>{howTos}</ol>
              <a id = 'activityLink' href={activity.link}><cite id="activityCitation">{activity.citation}</cite></a>
            </div>
            {loadForm(activity.type)}
          </div>)
        return tabInfo; 
      }
    );
    return tabDiv;  
  }

  function loadForm(props) {
    return (
      <form id={props}>
        <div>
          <br></br>
          <input id='activityCompleted' type="checkbox"></input>
          <label>Completed</label>
          <br></br>
          <br></br>
          <label>
            How did this activity make you feel?
            <br></br>
            <select id='activityRatingSelection'>
              <option>Excited</option>
              <option>Happy</option>
              <option>Relaxed</option>
              <option>Sad</option>
              <option>Frustrated</option>
              <option>Anxious</option>
              <option>Other</option>
            </select>
          </label>
          <div>
            <br></br>
            <label>Did this activity positively contribute to your personal growth or sense of wellbeing?</label>
            <br></br>
            <input type="radio" id="yes" name="wellbeingRadio" value='yes'/>
            <label for="yes">Yes</label>
            <input type="radio" id="no" name="wellbeingRadio" value='no'/>
            <label for="no">No</label>
          </div>
          <br></br>
          <label>
            Activity Journal Entry
            <br></br>
            <textarea id="activityNotes" name="activityNotes" rows="4" cols="30"></textarea>
          </label>
          <br></br>
          <button type="submit" value="activitySubmit">Submit Activity</button>
          <button type="reset" value="activityReset">Reset Activity</button>
        </div>
      </form>
    )
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
