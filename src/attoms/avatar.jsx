import React from 'react';

import "./avatar.css"

function Avatar({ imageSrc, description }) {
  return <img src={imageSrc} alt={description} />;
}

export default Avatar;