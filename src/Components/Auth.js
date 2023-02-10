import React from 'react'
import { Outlet } from 'react-router-dom';
import Login from './Login';

function Auth() {
    // const flag =false;
    const flag =true;
  return (
    <div>{flag?<Outlet/>:<Login/>}</div>
  )
}

export default Auth