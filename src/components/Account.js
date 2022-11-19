import React from 'react';
import ProgressChart from './Account Components/ProgressChart';
import Avatars from './Account Components/Avatars'; 
import InterestCarousel from './Account Components/InterestCarousel'

const Account = () => {
  return (
    <>
      <div className="account-overview-grand-wrapper">
        <div className="account-overview-wrapper" style={{width:'50%', marginLeft:'auto', marginRight:'auto', padding:'2em'}}>
          <h3 id="username-head">Grace Hopper (She/Her)</h3> 
          <Avatars />
          <h3 id="chart-head">Progress Tracker</h3>
          <ProgressChart />
        </div>
        <div className="account-overview-wrapper" style={{width:'50%', marginLeft:'auto', marginRight:'auto', padding:'2em'}}>
          <h3 id="askme-head">Ask Me About...</h3>
          <div style={{margin:'auto'}}><InterestCarousel /></div>
        </div>
      </div>
    </>
  );
};

export default Account;
