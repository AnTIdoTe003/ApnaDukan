import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const userData = useSelector((state)=>{
    return state.users
  })
  const [userName, setUserName] = useState('user')
  
  // console.log(userData.user.name)
  return (
    <>
    <div>Welcome </div>
    <h1>{(userData.token)?userData.user.name:userName}</h1>

    </>
    
  )
}

export default Home