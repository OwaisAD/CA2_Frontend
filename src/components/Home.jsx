import React from "react";
import { Link, Outlet } from "react-router-dom";
import Image from "../images/cinewatch2.png"

function Home() {
  return (
    <div>
      <div className="home-header">
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
        <div class="content">
        <img src={Image} alt="cinewatch logo" style={{maxWidth: "140px", margin:"30px auto 20px", display:"block"}} className="logo"/>
          <h1>Welcome to CineWatch</h1>
        </div>
      </div>
      <section>
        <h3>Get started</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
          iste dolor suscipit unde eligendi, similique ab enim. Ex velit vero
          voluptate aperiam, doloribus non est ratione cum nesciunt quasi,
          itaque placeat animi culpa voluptatum. Impedit ducimus deserunt
          accusantium corporis, beatae fugit soluta. Nisi, veniam fugit beatae
          dolor eaque perferendis accusantium?
        </p>
        <p>
        <Link to="/search">Start searching here!</Link>
      </p>
      </section>
      <section>
        <h3>Services</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
          iste dolor suscipit unde eligendi, similique ab enim. Ex velit vero
          voluptate aperiam, doloribus non est ratione cum nesciunt quasi,
          itaque placeat animi culpa voluptatum. Impedit ducimus deserunt
          accusantium corporis, beatae fugit soluta. Nisi, veniam fugit beatae
          dolor eaque perferendis accusantium?
        </p>
        <p>
        <Link to="/login">Already have a user?</Link>
      </p>
      </section>
      <Outlet />
    </div>
  );
}

export default Home;
