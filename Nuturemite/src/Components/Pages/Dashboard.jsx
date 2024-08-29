import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import DashNav from '../Navbar/DashNav';


const Dashboard = () => {
    const {user} = useContext(UserContext)
  return (
    <>
      <DashNav />
      <h1>Dashboard</h1>
      {!!user && (<h2>Hi {user.name}!</h2>)}
    </>
  )
}

export default Dashboard
