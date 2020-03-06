import React from 'react';
import { useSelector } from 'react-redux';

export default function UserInfo(props) {
  const number = useSelector(store => store._randomNumber);
  const info = props.userInfo;

  return (
    <div>
      <h1>Hi, {info.givenName}!</h1>
      <img src={info.imageUrl} alt={info.name} />
      <p>Your random numbers: {number}</p>
    </div>
  );
}
