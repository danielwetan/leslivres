import React from 'react';
// import { withRouter } from 'react-router-dom';

import './Profile.css';

import ProfileInfo from './ProfileInfo';
import HistoryList from './HistoryList';

const Profile = () => {
  return (
    <>
      {/* Main Section*/}
      <div className="row mt-5">
        <ProfileInfo />
        <HistoryList />
      </div>
    </>
  )
}

export default Profile;