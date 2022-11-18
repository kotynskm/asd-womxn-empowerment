import React from "react";
import ActivityRating from "../components/Dashboard Components/ActivityRating";
import DailyActivity from "../components/Dashboard Components/DailyAcitivity";
import ResourceCarousel from "../components/Dashboard Components/ResourceCarousel";


const Dashboard = () => {
return (
  <>
  <img src = "https://picsum.photos/800/300" />
  <ResourceCarousel />
  <DailyActivity />
  <ActivityRating />
  </>
)
}

export default Dashboard;