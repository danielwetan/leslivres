import React from 'react';
// import { withRouter } from 'react-router-dom';

import './Profile.css';

const Profile = () => {
  return(
    <>
        {/* Main Section*/}
        <div className="row justify-content-center align-items-center">
          <div className="col-md-5 ">
            <div className="row">
              <div className="col-4">
                <div className="profile-page-img bg-info text-center">
                  IMG
                </div>
              </div>
              <div className="col-8 bg-success">
                another
              </div>
            </div>
          </div>
          <div className="col-md-7 bg-primary">
            History Section
          </div>
        </div>
      </>
  )
}

export default Profile;