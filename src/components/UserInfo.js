import React from 'react';

export default function UserInfo(props) {
  const info = props.userInfo;

  return (
    <div>
      <h1>Hi, {info.givenName}!</h1>
      {/* <img src={info.imageUrl} alt={info.name} /> */}
    </div>
  );
}
