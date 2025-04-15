import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'
import Carousel from './Carousel'
const Nav = () => {
  return (
    <div>
     {/* navbar start  */}
    <nav className="navbar navbar-expand-lg   bg-body-tertiary">
      <div className="container-fluid">
<  img className='logo' src="images/Screenshot_2024-08-28_122134-removebg-preview.png" alt=""/>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
           <Link to="/About" > About</Link> </li>
          <li>
            <Link to="/Service">Services</Link> </li>
          <li>
            <Link to="/Blog">Blog</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
           
          </ul>
         <button className='loginbtn'>Login</button>
         <button className='cart'>
          <span className='crtimg'>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M104,216a16,16,0,1,1-16-16A16,16,0,0,1,104,216Zm88-16a16,16,0,1,0,16,16A16,16,0,0,0,192,200ZM239.71,74.14l-25.64,92.28A24.06,24.06,0,0,1,191,184H92.16A24.06,24.06,0,0,1,69,166.42L33.92,40H16a8,8,0,0,1,0-16H40a8,8,0,0,1,7.71,5.86L57.19,64H232a8,8,0,0,1,7.71,10.14ZM221.47,80H61.64l22.81,82.14A8,8,0,0,0,92.16,168H191a8,8,0,0,0,7.71-5.86Z"></path></svg>
          </span>
         </button>


        </div>
      </div>
    </nav>

{/* navbar end       */}

{/* slider start  */}
<Carousel />


    </div>
  )
}

export default Nav
