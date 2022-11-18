import React from "react";
import ActivityRating from "./Dashboard Components/ActivityRating";
import DailyActivity from "./Dashboard Components/DailyAcitivity";
import ResourceCarousel from "./Dashboard Components/ResourceCarousel";

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