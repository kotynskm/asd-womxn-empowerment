import React from 'react';
import ProgressChart from './Account Components/ProgressChart';
import Avatars from './Account Components/Avatars'; 
import InterestCarousel from './Account Components/InterestCarousel'

const Account = () => {
  return (
    <>
      <div id="account">Account.js</div>
      <Avatars />
      <InterestCarousel />
      <ProgressChart />
    </>
  );
};

export default Account;
