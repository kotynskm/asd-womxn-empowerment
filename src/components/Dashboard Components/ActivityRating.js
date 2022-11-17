import React from 'react';

const ActivityRating = () => {
  
  // Get these from DB when ready
  const activities =
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
    };

  // Prep list of howTos based on comma seperated list in DB
  const howTos = activities.howto.map((activity) => <li>{activity}</li>);

  return (
    <>
      {/* <div id="activityRating">ActivityRating.js</div> */}
        <div id='activityInfoContainer'>
          <h3 id='activityTitle'>{activities.title}</h3>
          <p id='activityDescription'>{activities.description}</p>
          <ol id='activityHowTo'>{howTos}</ol>
          <a id = 'activityLink' href={activities.link}><cite id="activityCitation">{activities.citation}</cite></a>
        </div>
        <form>
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
    </>
  );
};

export default ActivityRating;
