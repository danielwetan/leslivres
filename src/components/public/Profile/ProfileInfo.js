import React from 'react';

import ProfileImg from '../../../assets/images/profile.jpg'

const Profile = props => {
  return (
    <>
      <div className="col-md-5 mb-5">
        <div className="row">
          <div className="col-md-3 col-5">
            <div>
              <img
                src={ProfileImg}
                alt="Profile"
                className="profile-image"
              />
            </div>
          </div>
          <div className="col-md-9 mt-3">
            <div className="profile-name">
              Daniel Saputra
                </div>
            <div className="profile-username">
              @danielwetan
                </div>
            <div className="profile-city">
              <i class="fas fa-map-marker-alt"></i> Jakarta, Indonesia
                </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile;