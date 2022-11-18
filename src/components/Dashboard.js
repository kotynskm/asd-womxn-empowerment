import React from "react";
import ActivityRating from "./Dashboard Components/ActivityRating";
import DailyActivity from "./Dashboard Components/DailyAcitivity";
import ResourceCarousel from "./Dashboard Components/ResourceCarousel";
import Avatars from "./Avatars"

const Dashboard = () => {
return (
  <>
  <img src = "https://picsum.photos/800/300" />
  <ResourceCarousel />
  <DailyActivity />
  <ActivityRating />
  <Avatars />
  </>
)
}

export default Dashboard;