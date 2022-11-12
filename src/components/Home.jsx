import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function Home() {
  return (
    <div>
      <h2>Welcome ...</h2>
      <div style={{columnCount: 3, maxWidth:"900px"}}>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam iste dolor suscipit unde eligendi, similique ab enim. Ex velit vero voluptate aperiam, doloribus non est ratione cum nesciunt quasi, itaque placeat animi culpa voluptatum. Impedit ducimus deserunt accusantium corporis, beatae fugit soluta. Nisi, veniam fugit beatae dolor eaque perferendis accusantium?</p></div>
      <p><Link to="/search">Start searching here!</Link></p>
      <p><Link to="/login">Already have a user?</Link></p>
        
        <Outlet/>
    </div>
  )
}

export default Home
