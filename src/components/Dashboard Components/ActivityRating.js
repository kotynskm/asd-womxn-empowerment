import React from 'react';

const ActivityRating = () => {
  return (
    <>
      <div id="activityRating">ActivityRating.js</div>
      <form>
        <h3>Activity Title</h3>
        <p>Acitivity Description</p>
        <div style={{ textAlign: 'left', margin: '0% 27%' }}>
          <input type="checkbox"></input>
          <label>Completed</label>
          <br></br>
          <br></br>
          <label>
            How did this activity make you feel?
            <br></br>
            <select>
              <option>Happy</option>
              <option>Sad</option>
              <option>Frustrated</option>
              <option>Excited</option>
              <option>Anxious</option>
              <option>Relaxed</option>
              <option>Other</option>
            </select>
          </label>
          <br></br>
          <br></br>
          <label>
            Notes
            <br></br>
            <input type="text"></input>
          </label>
        </div>
      </form>
    </>
  );
};

export default ActivityRating;
