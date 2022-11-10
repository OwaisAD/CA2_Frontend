import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function Home() {
  return (
    <div>
      <h2>Welcome ...</h2>
      <p><Link to="/search">Start searching here!</Link></p>
      <p><Link to="/login">Already have a user?</Link></p>
        
        <Outlet/>
    </div>
  )
}

export default Home
