import React from 'react';
import ProgressChart from './Account Components/ProgressChart';
import Avatars from './Account Components/Avatars'; 
import InterestCarousel from './Account Components/InterestCarousel'

const Account = () => {
  return (
    <>
      <div className="account-overview-grand-wrapper">
        <div className="account-overview-wrapper">
          <h3 id="username-head">username && (pronouns)</h3>
          <Avatars />
        </div>

        <InterestCarousel />
      </div>
        <ProgressChart />
    </>
  );
};

export default Account;
