import React from 'react';

import ProfileImg from '../../../assets/images/profile.jpg'
import {connect} from 'react-redux';

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
              {props.auth.data.full_name}
                </div>
            <div className="profile-username">
              {props.auth.data.email}
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

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Profile);