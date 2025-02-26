import React, { useEffect, useState } from 'react';
import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar=()=>{
  const[sticky,setSticky]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50? setSticky(true):setSticky(false);
    })
  },[]);
  return(
    <nav className={`Container ${sticky? 'dark-nav':''}`}>
<h3>Edusity</h3>
<div id="search">
<input type='text' placeholder='search'/>

<i class="fa-solid fa-magnifying-glass"></i>
</div>
<ul>
    <li>Home</li>
    <li>Program</li>
    <li>About us</li>
    <li>Campus</li>
    <li>Testimonials</li>
    <li>Contact</li>

</ul>
    </nav>
  );
};
export default Navbar;