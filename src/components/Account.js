import React from 'react';
import ProgressChart from './Account Components/ProgressChart';
import Avatars from './Account Components/Avatars'; 
import InterestCarousel from './Account Components/InterestCarousel'

const Account = () => {
  return (
    <>
      <div id="account"></div>
      <h3>Name (pronouns)</h3>
      <Avatars />
      <InterestCarousel />
      <ProgressChart />
    </>
  );
};

export default Account;
