import React, { useState } from 'react'
import { useAuth } from '../context/auth'


const Home = () => {
  const [auth, setAuth] = useAuth()
  
  // console.log(userData.user.name)
  return (
    <>
      <div>Welcome </div>
      {auth.user.name? <h1>{auth.user.name}</h1>: <h1>User</h1>}
    </>
  );
}

export default Home