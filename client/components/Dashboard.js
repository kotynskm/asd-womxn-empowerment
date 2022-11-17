import React from "react";
import DailyActivity from "./Dashboard Components/DailyAcitivity";
import ResourceCarousel from "./Dashboard Components/ResourceCarousel";

const Dashboard = () => {
return (
  <>
  {/* random image here from api call*/}
  <ResourceCarousel />
  <DailyActivity />
  </>
)
}

export default Dashboard;