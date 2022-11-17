import React from "react";
import ReactDOM from 'react-dom/client';
import "./App.css";
import Carousel from 'react-material-ui-carousel'; 
import { Paper, Button } from '@mui/material'; 
import img1 from './images/img1.jpg'; 
import img2 from './images/img2.jpg'; 

// https://github.com/Learus/react-material-ui-carousel
function DailyInspiration(props) {
    var items = [
        {
            name: "Item 1",
            description: "Narrative 1", 
            image: img1
        },
        {
            name: "Item 2",
            description: "Narrative 2", 
            image: img2
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <img src={props.item.image}></img>
            <br></br>
            <Button className="CheckButton">
              Check it out!
            </Button>
            <br></br>
        </Paper>

    )
}

function DisplayActivityCategories(props) {

}

function ActivityForm(props) {
  return (
    <form>
      <h3>Activity Title</h3>
      <p>Acitivity Description</p>
      <div style={{textAlign:'left', margin:'0% 27%'}}>
        <input type='checkbox'></input>
        <label>Completed</label><br></br><br></br>
        <label>How did this activity make you feel?
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
        <br></br><br></br>
        <label>Notes
          <br></br>
          <input type='text'></input>
        </label>
      </div>
  </form>
  )
}

function CenterLayout(props) {
  return (
    <div style={{margin:'0% 27.5%', textAlign:'center'}}>
    <div id='carousel-container'>{DailyInspiration()}</div>
    <br></br>
    <div id="daily-activity-container">{ActivityForm()}</div>
    </div>
  )
}

function Profile(props) {
  return (
    <div style={{position:'fixed', top:'5%', right:'3%'}}>
      <button>My Profile</button>
    </div>
  )
}

class App extends React.Component {
  render() {
    return (
      <div>
        <div>{Profile()}</div>
        <div>{CenterLayout()}</div>
      </div>
    );
  }
}

export default App;