import React from 'react';

const SocialIcon = ({ socialHandle, socialName, socialLink, socialIcon, socialColor }) => (
  <a href={socialLink} className="social-icon-container" style={{ "color": socialColor }}>
    <i className={socialIcon}></i>
    <span className="social-label">{socialName}</span>
    <span className="social-handle">({socialHandle})</span>
  </a>
)

export default SocialIcon
