import React from "react";
import ActivityRating from "../components/Dashboard Components/ActivityRating";
import DailyActivity from "../components/Dashboard Components/DailyAcitivity";
import ResourceCarousel from "../components/Dashboard Components/ResourceCarousel";


const Dashboard = () => {
return (
  <>
    <div className="hero-img-wrapper"
      style={{
          display: "flex",
          alignItems: "center",
        }}
    >
      <img src="https://picsum.photos/800/300" alt="rotating tranquility placeholder img" />
    </div>

    <ResourceCarousel />
    <DailyActivity />
    <ActivityRating />
  </>
)
}

export default Dashboard;