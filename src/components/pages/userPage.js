import React from 'react';
import UserInfo from '../userInfo';
import { useSelector } from 'react-redux';

export default function UserPage() {
  const userInfo = useSelector(store => store.userInfo);
  return <UserInfo userInfo={userInfo}></UserInfo>;
}
